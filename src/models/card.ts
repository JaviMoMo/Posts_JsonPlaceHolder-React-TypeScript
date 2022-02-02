export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface UpdateCard {
    userId?: number;
    id: number;
    title?: string;
    body?: string;
}

