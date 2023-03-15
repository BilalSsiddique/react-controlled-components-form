export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validateName = (name) => {
  if (name.trim().length === 0 || name === "") {
    return false;
  } else {
    return true;
  }
};

export const validatePassword = (password) => {
  if (password.trim().length === 0 || password === "") {
    return false;
  }
  if (password.length < 8) return false;
  else {
    return true;
  }
};

export const validateRole = (role) => {
  if (role === "individual" || role === "business") {
    return true;
  } else {
    return false;
  }
};
