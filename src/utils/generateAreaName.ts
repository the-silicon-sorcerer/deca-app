export const generateAreaName = (area: string) => {
  let name = area.split(/Area:/)[1];
  if (name && name?.replace(/\s/g, "").length >= 19) {
    name = name?.slice(0, 19).concat("...");
  }
  return name;
};
