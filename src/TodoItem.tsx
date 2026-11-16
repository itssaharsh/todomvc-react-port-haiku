import { useEffect, useRef, type KeyboardEvent } from 'react';
import type { Todo } from './todo';

interface TodoItemProps {
  todo: Todo;
  isEditing: boolean;
  draft: string;
  onToggle: (id: string) => void;
  onStartEdit: (todo: Todo) => void;
  onDraftChange: (value: string) => void;
  onEditKeyUp: (e: KeyboardEvent<HTMLInputElement>) => void;
  onCommitEdit: (id: string, value: string) => void;
  onDestroy: (id: string) => void;
}

export default function TodoItem({
  todo,
  isEditing,
  draft,
  onToggle,
  onStartEdit,
  onDraftChange,
  onEditKeyUp,
  onCommitEdit,
  onDestroy,
}: TodoItemProps) {
  const editRef = useRef<HTMLInputElement>(null);

  // When editing starts, focus the edit field with the caret at the end,
  // as the legacy app did.
  useEffect(() => {
    if (isEditing && editRef.current) {
      const input = editRef.current;
      input.focus();
      const end = input.value.length;
      input.setSelectionRange(end, end);
    }
  }, [isEditing]);

  const classes = [todo.completed ? 'completed' : '', isEditing ? 'editing' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <li className={classes} data-id={todo.id}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <label onDoubleClick={() => onStartEdit(todo)}>{todo.title}</label>
        <button className="destroy" onClick={() => onDestroy(todo.id)} />
      </div>
      <input
        ref={editRef}
        className="edit"
        value={isEditing ? draft : todo.title}
        onChange={(e) => onDraftChange(e.target.value)}
        onKeyUp={onEditKeyUp}
        onBlur={(e) => {
          // Blur can also fire when the field is hidden after an edit has already
          // ended; only a blur during an active edit should commit.
          if (isEditing) {
            onCommitEdit(todo.id, e.currentTarget.value);
          }
        }}
      />
    </li>
  );
}
