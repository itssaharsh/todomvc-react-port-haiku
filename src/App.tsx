import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import TodoItem from './TodoItem';
import { pluralize, uuid, type Todo } from './todo';
import './styles/base.css';
import './styles/index.css';
import './styles/app.css';

const ENTER_KEY = 'Enter';
const ESCAPE_KEY = 'Escape';

// Reads the filter from a `#/<filter>` hash, or null when there is none.
function filterFromHash(): string | null {
  const match = /^#\/(.+)$/.exec(window.location.hash);
  return match ? match[1] : null;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<string>(() => filterFromHash() ?? 'all');
  const [newTitle, setNewTitle] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editDraft, setEditDraft] = useState('');
  const newTodoRef = useRef<HTMLInputElement>(null);
  // Set by Escape so the blur that follows discards the edit instead of saving it.
  const abortEditRef = useRef(false);

  // Route on the hash and default to #/all, like the legacy router.
  useEffect(() => {
    if (filterFromHash() === null) {
      window.location.hash = '#/all';
    }
    const onHashChange = () => setFilter(filterFromHash() ?? 'all');
    window.addEventListener('hashchange', onHashChange);

    // The legacy app signals readiness to test harnesses with this marker node.
    if (!document.getElementById('appIsReady')) {
      const marker = document.createElement('div');
      marker.id = 'appIsReady';
      document.body.appendChild(marker);
    }

    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // The legacy app refocused the new-todo input after every render.
  useEffect(() => {
    newTodoRef.current?.focus();
  }, [todos, filter]);

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  let visibleTodos = todos;
  if (filter === 'active') {
    visibleTodos = todos.filter((todo) => !todo.completed);
  } else if (filter === 'completed') {
    visibleTodos = todos.filter((todo) => todo.completed);
  }

  function handleCreate(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key !== ENTER_KEY) return;
    const title = newTitle.trim();
    if (!title) return;
    setTodos((prev) => [...prev, { id: uuid(), title, completed: false }]);
    setNewTitle('');
  }

  function toggleAll(checked: boolean) {
    setTodos((prev) => prev.map((todo) => ({ ...todo, completed: checked })));
  }

  function toggle(id: string) {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    );
  }

  function destroy(id: string) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function startEdit(todo: Todo) {
    abortEditRef.current = false;
    setEditDraft(todo.title);
    setEditingId(todo.id);
  }

  function handleEditKeyUp(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === ENTER_KEY) {
      e.currentTarget.blur();
    }
    if (e.key === ESCAPE_KEY) {
      abortEditRef.current = true;
      e.currentTarget.blur();
    }
  }

  function commitEdit(id: string, value: string) {
    const title = value.trim();
    const aborted = abortEditRef.current;
    abortEditRef.current = false;
    setEditingId(null);

    if (!title) {
      destroy(id);
      return;
    }
    // Always produce a new array, so the focus effect runs even when nothing changed.
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id && !aborted ? { ...todo, title } : todo)),
    );
  }

  function clearCompleted() {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
    // Matches the legacy app: the list shows everything, but the URL hash is left alone.
    setFilter('all');
  }

  return (
    <>
      <section id="todoapp" className="todoapp">
        <header id="header" className="header">
          <h1>todos</h1>
          <input
            id="new-todo"
            ref={newTodoRef}
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyUp={handleCreate}
          />
        </header>
        <main
          id="main"
          className="main"
          style={{ display: visibleTodos.length > 0 ? 'block' : 'none' }}
        >
          <div className="toggle-all-container">
            <input
              id="toggle-all"
              className="toggle-all"
              type="checkbox"
              checked={activeCount === 0}
              onChange={(e) => toggleAll(e.target.checked)}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
          </div>
          <ul id="todo-list" className="todo-list">
            {visibleTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                isEditing={editingId === todo.id}
                draft={editDraft}
                onToggle={toggle}
                onStartEdit={startEdit}
                onDraftChange={setEditDraft}
                onEditKeyUp={handleEditKeyUp}
                onCommitEdit={commitEdit}
                onDestroy={destroy}
              />
            ))}
          </ul>
        </main>
        <footer
          id="footer"
          className="footer"
          style={{ display: todos.length > 0 ? 'block' : 'none' }}
        >
          <span id="todo-count" className="todo-count">
            <strong>{activeCount}</strong> {pluralize(activeCount, 'item')} left
          </span>
          <ul id="filters" className="filters">
            <li>
              <a href="#/all" className={filter === 'all' ? 'selected' : undefined}>
                All
              </a>
            </li>
            <li>
              <a href="#/active" className={filter === 'active' ? 'selected' : undefined}>
                Active
              </a>
            </li>
            <li>
              <a href="#/completed" className={filter === 'completed' ? 'selected' : undefined}>
                Completed
              </a>
            </li>
          </ul>
          {completedCount > 0 && (
            <button className="clear-completed" onClick={clearCompleted}>
              Clear completed
            </button>
          )}
        </footer>
      </section>
      <footer id="info" className="info">
        <p>Double-click to edit a todo</p>
        <p>
          Created by <a href="http://sindresorhus.com">Sindre Sorhus</a>
        </p>
        <p>Updated by the TodoMVC Team</p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </>
  );
}
