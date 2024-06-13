export type TypeTarget = '_self' | '_blank' | '_parent'
export interface ILink {
    'href': string,
    'title': string,
    'target'?: TypeTarget
}