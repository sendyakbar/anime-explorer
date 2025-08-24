declare global {
  type BaseResponse<T> = {
    data: T
    pagination?: Pagination
  }

  type Pagination = {
    last_visible_page: number
    has_next_page: boolean
    current_page: number
  }
}

export {}