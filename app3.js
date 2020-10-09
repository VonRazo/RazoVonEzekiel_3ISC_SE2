function isTeenager(age) {
    let result;
    if (age <= 13) {
      result = "You're a teenager";
    } else {
      result = "You're not a teenager";
    }
    return result;
  }

  console.log(isTeenager(13));