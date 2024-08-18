/**
 * Represents a user profile.
 */
export interface Profile {
    id: string,
    user_id: string,
    email: string,
    username: string,
    created_at: string,
    nickname?: string,
    first_name?: string,
    last_name?: string,
    role?: 'admin' | 'teacher' | 'student'
}