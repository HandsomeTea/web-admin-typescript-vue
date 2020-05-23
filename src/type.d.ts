declare interface httpArgument {
    params?: object,
    data?: object,
    headers?: object
}

declare interface httpException {
    httpInfo: string,
    status: number,
    type?: string,
    info: string | object
}

declare interface alertOption {
    confirmButtonText?: string,
    type?: 'success' | 'info' | 'warning' | 'error'
}

declare interface confirmOption {
    confirmButtonText?: string,
    cancelButtonText?: string,
    type?: 'success' | 'info' | 'warning' | 'error'
}

declare interface promptOption {
    confirmButtonText?: string,
    cancelButtonText?: string,
    inputPlaceholder?: string,
    inputType?: 'text' | 'textArea' | 'password' | 'number',
    inputInitValue?: string
    inputPattern?: RegExp,
    inputValidator?: function,
    inputErrorMessage?: string
}

declare interface loadingOption {
    text?: string,
    target?: string
}

declare interface noticeOption {
    type?: 'success' | 'info' | 'warning' | 'error',
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left',
    onClose?: function,
    onClick?: function
}
