import { SearchContainer } from "../../styles";
import { CoverBackground, HomeBackground, HomeContainer, HomeContent } from "./styles";

interface HomeSectionProps{
    state: string
    setState: (value: string) => void 
}

export function HomeSection({ state, setState }: HomeSectionProps) {
    return (
        <HomeContainer>
            <HomeBackground>
                <CoverBackground />
            </HomeBackground>

            <HomeContent>
                <h1>Descubra o que há por aí!</h1>

                <SearchContainer>
                    <input 
                        name='search' 
                        type="text" 
                        placeholder='Faça aqui sua busca por uma Imagem'
                        onChange={e => setState(e.target.value)}
                        value={state}
                        />
                </SearchContainer>

            </HomeContent>
        </HomeContainer>

    )
}
