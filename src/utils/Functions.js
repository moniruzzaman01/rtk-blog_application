export function savedOrNot(isSaved) {
  return (blog) => {
    if (isSaved) {
      return blog.isSaved == true ? true : false;
    }
    return true;
  };
}

export function applySort(originalData, query) {
  if (query == "newest") {
    return [...originalData].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  } else if (query == "most_liked") {
    return [...originalData].sort((a, b) => b.likes - a.likes);
  } else {
    return originalData;
  }
}
