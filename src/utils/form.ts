export function parseForm(formElement: HTMLFormElement) {
  const formData = new FormData(formElement);
  const data: { [key: string]: any } = {};
  formData.forEach((entry, key) => (data[key] = entry));
  return data;
}

export function parseAddUserForm() {
  const formElement = document.getElementById("addUserForm") as HTMLFormElement;
  if (formElement == null) return null;
  const user = parseForm(formElement) as { name: string; age: string };
  return user;
}
