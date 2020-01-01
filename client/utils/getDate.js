const formatDate = date => (date < 10 ? `0${date}` : date);

export default (date, order = "default") =>
  order === "default"
    ? `${formatDate(date.getDate())}-${formatDate(
        date.getMonth() + 1
      )}-${date.getFullYear()}`
    : `${date.getFullYear()}-${formatDate(date.getMonth() + 1)}-${formatDate(
        date.getDate()
      )}`;
