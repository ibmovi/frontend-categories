
export interface Category {
    name: string,
    id: number,
    parentId: number | null
}

export interface CategoriesByParentId {
    [key: number]: Category[]
}

export interface CategoryTreeData {
    name: string,
    id: number,
    parentId: number | null,
    children?: Category[]
}