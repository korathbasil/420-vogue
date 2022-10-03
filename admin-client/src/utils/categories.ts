import { categories } from "sys";

export function findCategoryFromValue(value: string) {
  const selectedCategory = categories.find((e) => {
    return e.value === value;
  });
  return selectedCategory;
}

export function findSubCategoryFromValue(
  category: string,
  subCategory: string
) {
  const selectedCategory = findCategoryFromValue(category);

  if (!selectedCategory) return;

  const selectedSubCategory = selectedCategory.subCategories.find((e) => {
    return e.value === subCategory;
  });

  return selectedSubCategory;
}
