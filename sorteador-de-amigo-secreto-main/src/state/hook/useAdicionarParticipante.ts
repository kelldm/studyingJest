import { listaParticipantesState } from "../atom"
import{ useSetRecoilState } from 'recoil'

export const useAdicionarParticipante = ()=> {
    const setLista = useSetRecoilState (listaParticipantesState)
}