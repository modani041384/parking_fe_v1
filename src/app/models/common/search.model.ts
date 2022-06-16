export interface SearchModel {
    q?: string;
}

export interface PagingSearchModel<T extends SearchModel> {
    filter?: T,
    orderBy?: String,
    page?: Number,
    size?: Number,
    sorted?: String
}