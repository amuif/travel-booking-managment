export type Trips = {
    id: number;
    user_id: number;
    from_city: string;
    to_city: string;
    departure_date: string;
    return_date: string;
    airlines: 'Ethiopian Airlines' | 'Emirates Airlines' | 'Qatar Airways';
    price: number;
    take_off_time: string;
    landing_time: string;
    duration: string;
    created_at?: string;
    updated_at?: string;
};
