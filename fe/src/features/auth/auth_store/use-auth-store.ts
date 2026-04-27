// src/store/useAuthStore.ts

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import {User} from "../auth_types/login_type"
interface AuthState {
    user: any | null;
    isAuthenticated: boolean;
    login: (user: User) => void;
    logout: () => void;
    updateUser: (updatedUser: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
    // Bọc toàn bộ store bằng hàm persist
    persist(
        (set) => ({
            // 1. State gốc khởi tạo ban đầu (Cứ để rỗng)
            user: null,
            isAuthenticated: false,

            // 2. Action Login: Chỉ cập nhật State, KHÔNG CẦN gọi localStorage.setItem nữa
            login: (userData) => {
                set({ 
                    user: userData, 
                    isAuthenticated: true 
                });
            },

            // 3. Action Logout
            logout: () => {
                set({ user: null, isAuthenticated: false });
            },
            updateUser: (updatedUser) => {
                set(state => {
                    if (state.user) {
                        return { user: { ...state.user, ...updatedUser } };
                    }
                    return state; // Nếu không có user, giữ nguyên state
                });
            }
        }),
        {
            name: 'auth-storage', // Tên Key sẽ lưu dưới LocalStorage
            storage: createJSONStorage(() => localStorage), 
            
            // SENIOR TIP: Không phải cái gì cũng lưu. Ví dụ bạn không muốn lưu isAuthenticated, 
            // chỉ muốn lưu user và token thôi.
            partialize: (state) => ({ 
                user: state.user, 
                isAuthenticated: state.isAuthenticated
            }),
        }
    )
);