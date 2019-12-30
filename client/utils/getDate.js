export default (date, order = "default") =>
  order === "default"
    ? `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
    : `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
