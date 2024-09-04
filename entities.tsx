export interface Dog {
    id?: string;
    name: string;
    breed: string;
    birthdate: string|Date;

}

export interface Post {
    id?: number;
    userId: number;
    title: string;
    body: string;
}