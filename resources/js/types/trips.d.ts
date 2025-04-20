export interface TTrips {
    id: number;
    created_at: Date;
    departure_date: Date;
    from_city: string;
    return_date: Date;
    to_city: string;
    updated_at: Date;
    user_id: string;
    user:TUser;
}
