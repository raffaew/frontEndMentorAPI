export interface Slip {
    advice: string;
    id: number;
}

export interface ApiResponse {
    slip: Slip;
}