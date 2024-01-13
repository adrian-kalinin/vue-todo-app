import { uid } from "uid";

export default class Todo {
  constructor(text) {
    this.id = uid();
    this.text = text;
    this.isCompleted = false;
    this.isEditing = false;
  }
}
