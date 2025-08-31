import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
    createCategory,
    deleteCategory,
    updateCategory
} from "./categoryMutation";
import { toast } from "sonner";
import { CategorySchema } from "../_types/categorySchema";

const useCreateCategory = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: CategorySchema) => {
            await createCategory(data);
        },
        onSuccess: () => {
            toast.success("Category created successfully.");
            queryClient.invalidateQueries({ queryKey: ["categories"] });
        },
    });
};

const useUpdateCategory = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: CategorySchema) => {
            await updateCategory(data);
        },
        onSuccess: () => {
            toast.success("Category updated successfully.");
            queryClient.invalidateQueries({ queryKey: ["categories"] });
        },
    });
};


const useDeleteCategory = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id: number) => {
            await deleteCategory(id);
        },
        onSuccess: () => {
            toast.success("Category deleted successfully");
            queryClient.invalidateQueries({ queryKey: ["categories"] });
        },
    });
};

export { useCreateCategory, useUpdateCategory, useDeleteCategory };