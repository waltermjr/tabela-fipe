import { useState, useContext } from 'react'
import { TextField, Snackbar } from "@mui/material"
import { Content, AutoCompleteUI, Title, SubTitle, Container, ButtonUI } from "../../styles/busca"
import api from "@/services/api"
import { models } from '@/helpers/Models'
import { fipeContext } from '@/context/contextFipe'
import { useRouter } from 'next/router'

export interface IRequest {
  codigo: string,
  nome: string
}

export interface IRequestTranslated {
  id: string,
  label: string
}

interface Props {
  result : IRequest[]
}

const Busca = ({ result }: Props) => {
  const { setFipeResult } = useContext(fipeContext)
  const [model, setModel] = useState<IRequestTranslated[]>([])
  const [year, setYear] = useState<IRequestTranslated[]>([])
  const [brandValue, setBrandValue] = useState<IRequestTranslated | null>(null)
  const [modelValue, setModelValue] = useState<IRequestTranslated | null>(null)
  const [yearValue, setYearValue] = useState<IRequestTranslated | null>(null)
  const [openBar, setOpenBar] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const { push } = useRouter()

  const changeBrands = async (brand: IRequestTranslated) => {
    if(!brand){
      setBrandValue(null)
      setModelValue(null)
      setYearValue(null)
      setModel([])
      setYear([])

      return
    }

    try{
      const { data } = await api.get(`${brand.id}/modelos`)

      setBrandValue(brand)
      setModel(models(data.modelos))
    }catch(error){
      setModel([])
      setYear([])
    }
  }

  const changeModel = async (model: IRequestTranslated) => {
    setModelValue(model)

    if(!model){
      setYearValue(null)

      return
    }

    try{
      const { data } = await api.get(`${brandValue?.id}/modelos/${model.id}/anos`)

      setYear(models(data))
    }catch(error){
      setModel([])
      setYear([])
    }
  }

  const changeYear = (year: IRequestTranslated) => {
    setYearValue(year)
  }

  const getFipeValue = async () => {
    setLoading(true)
    try{
      const result = await api.get(`/${brandValue?.id}/modelos/${modelValue?.id}/anos/${yearValue?.id}`)
      setFipeResult(result.data)
      setLoading(false)
      push('/resultado')
    }catch(error){
      setLoading(false)
      setOpenBar(true)
    }
  }

  const disableButton = () => {
    if(brandValue && modelValue && yearValue && !loading){
      return false
    }

    return true
  }

  return(
    <Container>    
      <Title>Tabela Fipe</Title>
      <SubTitle>Consulte o valor de um veiculo de forma gratuita</SubTitle>
      <Content>
        <AutoCompleteUI
          data-testid="brand-input"
          options={models(result)}
          disabled={loading}
          onChange={(e,value:any) => changeBrands(value)}
          value={brandValue}
          renderInput={(params => <TextField {...params} label="Marca" />)}
        />
        <AutoCompleteUI
          data-testid="model-input"
          disabled={brandValue && !loading ? false : true} 
          options={model}
          value={modelValue}
          onChange={(e,value:any) => changeModel(value)} 
          renderInput={(params => <TextField {...params} label="Modelo" />)}
        />
        {modelValue &&
          <AutoCompleteUI
            data-testid="year-input"
            options={year}
            value={yearValue}
            disabled={loading}
            onChange={(e,value:any) => changeYear(value)} 
            renderInput={(params => <TextField {...params} label="Ano" />)}
          />
        }
        <ButtonUI onClick={getFipeValue} disabled={disableButton()} variant="contained">Consultar preço</ButtonUI>
      </Content>
      <Snackbar
        open={openBar}
        autoHideDuration={6000}
        onClose={() => setOpenBar(false)}
        message="Erro ao exibir dados"
      />
    </Container>
  )
}

export async function getStaticProps() {
  const result = await api.get("/")

  return {
    props: {
      result: result.data
    },
    revalidate: 1000,
  }
}

export default Busca