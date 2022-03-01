export interface PyRootStateTypes {
    loading: boolean,
}


export interface PyPoppyTypes {
    user: object,
    appId: string,
    core: object,
    token: string,
    size: string,
    loading: boolean,
    action: string,
    media: string,
    message: object,
    request: PyPoppyRequest,
    requestBtnKey: string,
    title: string,
    menus: object,

}

export interface PyPoppyRequest {
    method?: string,       // page, request
    url?: string,
    title?: string,
    type?: string,         // form
    confirm?: boolean,    // false
}

export interface PyGridTypes {
    action: object,
    button: string,
    page: string,
    loading: boolean,
    reload: boolean,
    reset: boolean,
}


export interface PyNavTypes {
    menus: [],
    navs: object,
    key: string,
    prefix: string,
    sidebarActive: boolean,
}
