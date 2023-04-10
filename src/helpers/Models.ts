import { IRequest, IRequestTranslated } from "@/pages/busca"

export const models = (marcas: IRequest[]): IRequestTranslated[] => marcas.map((marca: IRequest) => ({id: marca.codigo, label: marca.nome}))