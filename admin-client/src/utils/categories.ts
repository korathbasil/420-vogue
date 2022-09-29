import { categories } from "sys";

export function findCategoryFromValue(arr: typeof categories, value: string) {
  const selectedCategory = arr.find((e) => {
    return e.value === value;
  });
  return selectedCategory?.name;
}

export function findSubCategoryFromValue(
  arr: typeof categories,
  category: string,
  subCategory: string
) {
  const selectedCategory = arr.find((e) => {
    return e.value === category;
  });

  const selectedSubCategory = selectedCategory?.subCategories.find((e) => {
    return e.value === subCategory;
  });

  return selectedSubCategory?.name;
}
