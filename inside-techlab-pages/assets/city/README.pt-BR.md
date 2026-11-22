# Kit Cidade Low Poly: 129 modelos 3D low poly grátis (CC0) para montar cidades

**🇬🇧 [Read in English](README.md)** · 🇧🇷 Português

![Bairro low poly montado com o Kit Cidade Low Poly: casas, ruas modulares, árvores e veículos](previews/capa.jpg)

https://github.com/user-attachments/assets/9e1bd911-9ffb-4aa4-b0b1-4a5edbcdbd48

▶️ **[Assista ao vídeo no YouTube](https://www.youtube.com/watch?v=o9hur_gAZ-k)** · **[Baixe no itch.io](https://kkyqr.itch.io/low-poly-city-kit)** (grátis, doação opcional)

> **Resposta curta:** o Kit Cidade Low Poly é um pacote **gratuito e em domínio público (CC0 1.0)** com
> **129 modelos 3D low poly em glTF/GLB** para montar cidades em jogos e visualizações. Tem casas, comércio,
> serviços públicos, água e saneamento, energia renovável, resíduos, parques, ruas e terreno modulares
> (tiles 2 × 2), veículos, mobiliário urbano, árvores nativas brasileiras (ipê-amarelo, araucária, buriti) e
> beira de rio. Cores chapadas, sem texturas, até 1.500 triângulos por modelo. Funciona em Godot, Unity,
> Unreal, three.js, Babylon.js e Blender. Pode usar em projeto comercial, e dar crédito é opcional.

Modelos 3D low poly **livres** para montar cidades: casas, comércio, serviços públicos, água e saneamento,
energia, resíduos, parques, ruas e terreno modulares, veículos, mobiliário urbano, vegetação nativa brasileira
e beira de rio. Tudo em **glTF binário (`.glb`)**, com cores chapadas e sem texturas, pronto para Godot, Unity,
Unreal, Babylon.js, three.js, Blender e afins.

**Domínio público ([CC0 1.0](LICENSE)).** Use como quiser, em projetos pessoais, educativos ou comerciais,
modifique e redistribua. Dar crédito é opcional (veja [CITATION.cff](CITATION.cff)). Sem nenhuma garantia.

**Conteúdo:** [Como usar](#como-usar) · [Catálogo](#catálogo) · [Como gerar ou modificar](#como-gerar-ou-modificar) ·
[Perguntas frequentes](#perguntas-frequentes) · [Origem e créditos](#origem-e-créditos)

## Como usar

- Baixe o repositório (botão **Code → Download ZIP**) ou só os `.glb` de que precisar em [`models/`](models).
- **Escala e grade:** 1 lote = 2 × 2 unidades. Prédios ocupam N × N lotes; ruas e terreno são peças de
  exatamente 2 × 2 que se encaixam lado a lado; veículos, props e mobiliário estão numa escala "de brinquedo"
  que conversa com esses lotes.
- **Orientação:** Y para cima, frente dos modelos voltada para **-Z** (convenção glTF).
- **Materiais:** um material por cor (PBR, só cor base, rugosidade 0,85). Para juntar tudo num draw call,
  converta as cores dos materiais em cor de vértice na sua engine.
- **Partes animáveis:** objetos chamados `pas_N` (rotores, giram no eixo do cubo) e `gira_N` (giram em pé)
  ficam separados do corpo, com o pivô no lugar.
- **Orçamento:** no máximo 1.500 triângulos e 150 KB por modelo.

### Ruas e terreno modulares

As peças de `ruas/` e `terreno/` ocupam exatamente x, z ∈ [-1, 1] e se encaixam numa grade de 2 unidades,
girando em múltiplos de 90° em Y. Medidas em glTF (Y para cima):

| Elemento | Medida |
|---|---|
| Bloco de terreno | de y -0,3 a 0 (topo da grama em 0); as ruas já trazem o bloco embaixo e **substituem** o tile de terreno |
| Asfalto | 1,3 de largura centrada (\|x\| ≤ 0,65), topo em y 0,04, faixa amarela tracejada no eixo |
| Meio-fio e calçada | meio-fio com topo em 0,075; calçada de \|x\| 0,65 a 1,0 com topo em 0,07 |
| Estrada de terra | mesma largura do asfalto, topo em y 0,02, sem calçada |
| Água | superfície em y -0,12; margem de areia em degrau a y -0,06 |
| Morro | topo em y 0,6; `rampa` sobe de 0 (borda -Z) a 0,6 (borda +Z) |

Conexões sem rotação: `asfalto_reta`, `asfalto_faixa_pedestre`, `terra_reta` e `ponte` ligam -Z e +Z;
`asfalto_curva` e `terra_curva` ligam -Z e -X; `asfalto_t` liga -Z, +Z e -X; `asfalto_ponta` só -Z;
`estacionamento` abre para -Z; `margem_reta` tem a água na metade -Z; `margem_canto` tem a água num quarto de
círculo no canto (+X, -Z). Veja um bairro montado em [`src/cena_cidade.py`](src/cena_cidade.py).

## Catálogo

<!-- catalogo:inicio -->
**129 modelos** em 14 categorias.

### Residencial · Residential (5)

![Modelos 3D low poly: Residencial](previews/residencial.jpg)

| | Modelo | Descrição | Tris |
|---|---|---|---:|
| <img src="previews/residencial/casa_simples.jpg" width="120" alt="Casa simples (1×1)"> | [`casa_simples`](models/residencial/casa_simples.glb) | Casa simples (1×1) | 584 |
| <img src="previews/residencial/casa_sobrado.jpg" width="120" alt="Sobrado (1×1)"> | [`casa_sobrado`](models/residencial/casa_sobrado.glb) | Sobrado (1×1) | 564 |
| <img src="previews/residencial/casas_geminadas.jpg" width="120" alt="Casas geminadas (1×1)"> | [`casas_geminadas`](models/residencial/casas_geminadas.glb) | Casas geminadas (1×1) | 588 |
| <img src="previews/residencial/predio_alto.jpg" width="120" alt="Prédio alto residencial (1×1)"> | [`predio_alto`](models/residencial/predio_alto.glb) | Prédio alto residencial (1×1) | 1008 |
| <img src="previews/residencial/predio_apartamentos.jpg" width="120" alt="Prédio de apartamentos (1×1)"> | [`predio_apartamentos`](models/residencial/predio_apartamentos.glb) | Prédio de apartamentos (1×1) | 1208 |

### Comércio · Commercial (8)

![Modelos 3D low poly: Comércio](previews/comercial.jpg)

| | Modelo | Descrição | Tris |
|---|---|---|---:|
| <img src="previews/comercial/banco.jpg" width="120" alt="Agência bancária (1×1)"> | [`banco`](models/comercial/banco.glb) | Agência bancária (1×1) | 662 |
| <img src="previews/comercial/escritorio.jpg" width="120" alt="Prédio de escritórios (1×1)"> | [`escritorio`](models/comercial/escritorio.glb) | Prédio de escritórios (1×1) | 820 |
| <img src="previews/comercial/hotel.jpg" width="120" alt="Hotel (1×1)"> | [`hotel`](models/comercial/hotel.glb) | Hotel (1×1) | 678 |
| <img src="previews/comercial/loja_esquina.jpg" width="120" alt="Loja de esquina (1×1)"> | [`loja_esquina`](models/comercial/loja_esquina.glb) | Loja de esquina (1×1) | 652 |
| <img src="previews/comercial/mercado.jpg" width="120" alt="Mercado de bairro (1×1)"> | [`mercado`](models/comercial/mercado.glb) | Mercado de bairro (1×1) | 512 |
| <img src="previews/comercial/posto_recarga.jpg" width="120" alt="Posto de recarga de carros elétricos (1×1)"> | [`posto_recarga`](models/comercial/posto_recarga.glb) | Posto de recarga de carros elétricos (1×1) | 636 |
| <img src="previews/comercial/restaurante.jpg" width="120" alt="Restaurante (1×1)"> | [`restaurante`](models/comercial/restaurante.glb) | Restaurante (1×1) | 738 |
| <img src="previews/comercial/shopping.jpg" width="120" alt="Shopping (2×2)"> | [`shopping`](models/comercial/shopping.glb) | Shopping (2×2) | 796 |

### Serviços públicos · Public services (12)

![Modelos 3D low poly: Serviços públicos](previews/publicos.jpg)

| | Modelo | Descrição | Tris |
|---|---|---|---:|
| <img src="previews/publicos/biblioteca.jpg" width="120" alt="Biblioteca Pública (1×1)"> | [`biblioteca`](models/publicos/biblioteca.glb) | Biblioteca Pública (1×1) | 812 |
| <img src="previews/publicos/bombeiros.jpg" width="120" alt="Corpo de Bombeiros (1×1)"> | [`bombeiros`](models/publicos/bombeiros.glb) | Corpo de Bombeiros (1×1) | 670 |
| <img src="previews/publicos/centro_pesquisa.jpg" width="120" alt="Centro de Pesquisa (2×2)"> | [`centro_pesquisa`](models/publicos/centro_pesquisa.glb) | Centro de Pesquisa (2×2) | 952 |
| <img src="previews/publicos/centro_tecnologia.jpg" width="120" alt="Centro de Tecnologia (1×1)"> | [`centro_tecnologia`](models/publicos/centro_tecnologia.glb) | Centro de Tecnologia (1×1) | 686 |
| <img src="previews/publicos/escola.jpg" width="120" alt="Escola (2×2)"> | [`escola`](models/publicos/escola.glb) | Escola (2×2) | 1328 |
| <img src="previews/publicos/hospital.jpg" width="120" alt="Hospital (2×2)"> | [`hospital`](models/publicos/hospital.glb) | Hospital (2×2) | 1224 |
| <img src="previews/publicos/monumento.jpg" width="120" alt="Monumento Histórico (2×2)"> | [`monumento`](models/publicos/monumento.glb) | Monumento Histórico (2×2) | 1154 |
| <img src="previews/publicos/museu.jpg" width="120" alt="Museu (3×3)"> | [`museu`](models/publicos/museu.glb) | Museu (3×3) | 1238 |
| <img src="previews/publicos/policia.jpg" width="120" alt="Delegacia / Base da Polícia (1×1)"> | [`policia`](models/publicos/policia.glb) | Delegacia / Base da Polícia (1×1) | 772 |
| <img src="previews/publicos/posto_saude.jpg" width="120" alt="Posto de Saúde / UBS (1×1)"> | [`posto_saude`](models/publicos/posto_saude.glb) | Posto de Saúde / UBS (1×1) | 724 |
| <img src="previews/publicos/prefeitura.jpg" width="120" alt="Prefeitura Municipal (2×2)"> | [`prefeitura`](models/publicos/prefeitura.glb) | Prefeitura Municipal (2×2) | 1146 |
| <img src="previews/publicos/universidade.jpg" width="120" alt="Universidade (3×3)"> | [`universidade`](models/publicos/universidade.glb) | Universidade (3×3) | 1352 |

### Indústria · Industry (4)

![Modelos 3D low poly: Indústria](previews/industrial.jpg)

| | Modelo | Descrição | Tris |
|---|---|---|---:|
| <img src="previews/industrial/fabrica.jpg" width="120" alt="Fábrica (2×2)"> | [`fabrica`](models/industrial/fabrica.glb) | Fábrica (2×2) | 1372 |
| <img src="previews/industrial/galpao.jpg" width="120" alt="Galpão / Armazém (1×1)"> | [`galpao`](models/industrial/galpao.glb) | Galpão / Armazém (1×1) | 748 |
| <img src="previews/industrial/oficina.jpg" width="120" alt="Oficina Mecânica (1×1)"> | [`oficina`](models/industrial/oficina.glb) | Oficina Mecânica (1×1) | 1164 |
| <img src="previews/industrial/porto.jpg" width="120" alt="Porto (2×2, sobre a água)"> | [`porto`](models/industrial/porto.glb) | Porto (2×2, sobre a água) | 1020 |

### Água e saneamento · Water and sanitation (16)

![Modelos 3D low poly: Água e saneamento](previews/agua.jpg)

| | Modelo | Descrição | Tris |
|---|---|---|---:|
| <img src="previews/agua/barragem_subterranea.jpg" width="120" alt="Barragem Subterrânea (2×2)"> | [`barragem_subterranea`](models/agua/barragem_subterranea.glb) | Barragem Subterrânea (2×2) | 592 |
| <img src="previews/agua/bomba_agua.jpg" width="120" alt="Bomba de Água (1×1)"> | [`bomba_agua`](models/agua/bomba_agua.glb) | Bomba de Água (1×1) | 440 |
| <img src="previews/agua/caixa_dagua.jpg" width="120" alt="Caixa-d'Água Elevada (1×1)"> | [`caixa_dagua`](models/agua/caixa_dagua.glb) | Caixa-d'Água Elevada (1×1) | 1232 |
| <img src="previews/agua/centro_controle_perdas.jpg" width="120" alt="Centro de Controle de Perdas (2×2)"> | [`centro_controle_perdas`](models/agua/centro_controle_perdas.glb) | Centro de Controle de Perdas (2×2) | 964 |
| <img src="previews/agua/centro_pesquisa_agua.jpg" width="120" alt="Centro de Pesquisas Hídricas (3×3)"> | [`centro_pesquisa_agua`](models/agua/centro_pesquisa_agua.glb) | Centro de Pesquisas Hídricas (3×3) | 1112 |
| <img src="previews/agua/estacao_filtragem.jpg" width="120" alt="Estação de Filtros (1×1)"> | [`estacao_filtragem`](models/agua/estacao_filtragem.glb) | Estação de Filtros (1×1) | 984 |
| <img src="previews/agua/estacao_monitoramento.jpg" width="120" alt="Estação de Monitoramento (1×1)"> | [`estacao_monitoramento`](models/agua/estacao_monitoramento.glb) | Estação de Monitoramento (1×1) | 684 |
| <img src="previews/agua/eta.jpg" width="120" alt="Estação de Tratamento de Água — ETA (2×2)"> | [`eta`](models/agua/eta.glb) | Estação de Tratamento de Água — ETA (2×2) | 1268 |
| <img src="previews/agua/ete.jpg" width="120" alt="Estação de Tratamento de Esgoto — ETE (2×2)"> | [`ete`](models/agua/ete.glb) | Estação de Tratamento de Esgoto — ETE (2×2) | 1232 |
| <img src="previews/agua/jardim_chuva.jpg" width="120" alt="Jardim de Chuva (2×2)"> | [`jardim_chuva`](models/agua/jardim_chuva.glb) | Jardim de Chuva (2×2) | 776 |
| <img src="previews/agua/jardim_flutuante.jpg" width="120" alt="Jardim Flutuante (3×3, sobre a água)"> | [`jardim_flutuante`](models/agua/jardim_flutuante.glb) | Jardim Flutuante (3×3, sobre a água) | 1212 |
| <img src="previews/agua/monitor_qualidade_agua.jpg" width="120" alt="Monitor de Qualidade (1×1)"> | [`monitor_qualidade_agua`](models/agua/monitor_qualidade_agua.glb) | Monitor de Qualidade (1×1) | 508 |
| <img src="previews/agua/poco_artesiano.jpg" width="120" alt="Poço Artesiano (1×1)"> | [`poco_artesiano`](models/agua/poco_artesiano.glb) | Poço Artesiano (1×1) | 656 |
| <img src="previews/agua/reservatorio.jpg" width="120" alt="Reservatório (1×1)"> | [`reservatorio`](models/agua/reservatorio.glb) | Reservatório (1×1) | 868 |
| <img src="previews/agua/usina_dessalinizacao.jpg" width="120" alt="Usina de Dessalinização (3×3)"> | [`usina_dessalinizacao`](models/agua/usina_dessalinizacao.glb) | Usina de Dessalinização (3×3) | 1468 |
| <img src="previews/agua/usina_reuso_agua.jpg" width="120" alt="Estação de Água de Reúso (3×3)"> | [`usina_reuso_agua`](models/agua/usina_reuso_agua.glb) | Estação de Água de Reúso (3×3) | 938 |

### Energia · Energy (11)

![Modelos 3D low poly: Energia](previews/energia.jpg)

| | Modelo | Descrição | Tris |
|---|---|---|---:|
| <img src="previews/energia/biodigestor.jpg" width="120" alt="Biodigestor (2×2)"> | [`biodigestor`](models/energia/biodigestor.glb) | Biodigestor (2×2) | 1408 |
| <img src="previews/energia/hidreletrica.jpg" width="120" alt="Hidrelétrica (3×3, sobre a água)"> | [`hidreletrica`](models/energia/hidreletrica.glb) | Hidrelétrica (3×3, sobre a água) | 972 |
| <img src="previews/energia/parque_eolico.jpg" width="120" alt="Campo Eólico (2×2)"> | [`parque_eolico`](models/energia/parque_eolico.glb) | Campo Eólico (2×2) | 846 |
| <img src="previews/energia/poste_energia.jpg" width="120" alt="Poste de Energia (1×1)"> | [`poste_energia`](models/energia/poste_energia.glb) | Poste de Energia (1×1) | 264 |
| <img src="previews/energia/termeletrica.jpg" width="120" alt="Termelétrica (2×2)"> | [`termeletrica`](models/energia/termeletrica.glb) | Termelétrica (2×2) | 844 |
| <img src="previews/energia/usina_biomassa.jpg" width="120" alt="Usina de Biomassa (2×2)"> | [`usina_biomassa`](models/energia/usina_biomassa.glb) | Usina de Biomassa (2×2) | 1056 |
| <img src="previews/energia/usina_cana.jpg" width="120" alt="Usina Sucroenergética (3×3)"> | [`usina_cana`](models/energia/usina_cana.glb) | Usina Sucroenergética (3×3) | 1440 |
| <img src="previews/energia/usina_carvao.jpg" width="120" alt="Usina a Carvão (2×2)"> | [`usina_carvao`](models/energia/usina_carvao.glb) | Usina a Carvão (2×2) | 512 |
| <img src="previews/energia/usina_mare.jpg" width="120" alt="Usina Maremotriz (2×2, sobre a água)"> | [`usina_mare`](models/energia/usina_mare.glb) | Usina Maremotriz (2×2, sobre a água) | 640 |
| <img src="previews/energia/usina_nuclear.jpg" width="120" alt="Usina Nuclear (4×4)"> | [`usina_nuclear`](models/energia/usina_nuclear.glb) | Usina Nuclear (4×4) | 1488 |
| <img src="previews/energia/usina_solar.jpg" width="120" alt="Usina Solar (3×3)"> | [`usina_solar`](models/energia/usina_solar.glb) | Usina Solar (3×3) | 944 |

### Resíduos · Waste and recycling (4)

![Modelos 3D low poly: Resíduos](previews/residuos.jpg)

| | Modelo | Descrição | Tris |
|---|---|---|---:|
| <img src="previews/residuos/aterro_sanitario.jpg" width="120" alt="Aterro Sanitário (3×3)"> | [`aterro_sanitario`](models/residuos/aterro_sanitario.glb) | Aterro Sanitário (3×3) | 1482 |
| <img src="previews/residuos/cooperativa_reciclagem.jpg" width="120" alt="Cooperativa de Reciclagem (2×2)"> | [`cooperativa_reciclagem`](models/residuos/cooperativa_reciclagem.glb) | Cooperativa de Reciclagem (2×2) | 1302 |
| <img src="previews/residuos/patio_compostagem.jpg" width="120" alt="Pátio de Compostagem (2×2)"> | [`patio_compostagem`](models/residuos/patio_compostagem.glb) | Pátio de Compostagem (2×2) | 1158 |
| <img src="previews/residuos/ponto_coleta.jpg" width="120" alt="Ponto de Coleta Reciclável / PEV (1×1)"> | [`ponto_coleta`](models/residuos/ponto_coleta.glb) | Ponto de Coleta Reciclável / PEV (1×1) | 832 |

### Parques · Parks (5)

![Modelos 3D low poly: Parques](previews/parques.jpg)

| | Modelo | Descrição | Tris |
|---|---|---|---:|
| <img src="previews/parques/ecoparque.jpg" width="120" alt="Ecoparque (3×3)"> | [`ecoparque`](models/parques/ecoparque.glb) | Ecoparque (3×3) | 1480 |
| <img src="previews/parques/parede_verde.jpg" width="120" alt="Parede Verde (1×1)"> | [`parede_verde`](models/parques/parede_verde.glb) | Parede Verde (1×1) | 876 |
| <img src="previews/parques/parque.jpg" width="120" alt="Parque Turístico (4×4)"> | [`parque`](models/parques/parque.glb) | Parque Turístico (4×4) | 1484 |
| <img src="previews/parques/parque_linear.jpg" width="120" alt="Parque Linear (3×3)"> | [`parque_linear`](models/parques/parque_linear.glb) | Parque Linear (3×3) | 900 |
| <img src="previews/parques/telhado_verde.jpg" width="120" alt="Teto Verde (2×2)"> | [`telhado_verde`](models/parques/telhado_verde.glb) | Teto Verde (2×2) | 1332 |

### Ruas (peças modulares 2 × 2) · Roads (modular 2 × 2 tiles) (12)

![Modelos 3D low poly: Ruas (peças modulares 2 × 2)](previews/ruas.jpg)

| | Modelo | Descrição | Tris |
|---|---|---|---:|
| <img src="previews/ruas/asfalto_cruzamento.jpg" width="120" alt="Cruzamento de asfalto (tile 2×2)"> | [`asfalto_cruzamento`](models/ruas/asfalto_cruzamento.glb) | Cruzamento de asfalto (tile 2×2) | 492 |
| <img src="previews/ruas/asfalto_curva.jpg" width="120" alt="Rua de asfalto em curva (tile 2×2)"> | [`asfalto_curva`](models/ruas/asfalto_curva.glb) | Rua de asfalto em curva (tile 2×2) | 548 |
| <img src="previews/ruas/asfalto_faixa_pedestre.jpg" width="120" alt="Rua de asfalto reta com faixa de pedestres (tile 2×2)"> | [`asfalto_faixa_pedestre`](models/ruas/asfalto_faixa_pedestre.glb) | Rua de asfalto reta com faixa de pedestres (tile 2×2) | 228 |
| <img src="previews/ruas/asfalto_ponta.jpg" width="120" alt="Fim de rua com balão de retorno (tile 2×2)"> | [`asfalto_ponta`](models/ruas/asfalto_ponta.glb) | Fim de rua com balão de retorno (tile 2×2) | 524 |
| <img src="previews/ruas/asfalto_reta.jpg" width="120" alt="Rua de asfalto reta (tile 2×2)"> | [`asfalto_reta`](models/ruas/asfalto_reta.glb) | Rua de asfalto reta (tile 2×2) | 132 |
| <img src="previews/ruas/asfalto_t.jpg" width="120" alt="Entroncamento em T de asfalto (tile 2×2)"> | [`asfalto_t`](models/ruas/asfalto_t.glb) | Entroncamento em T de asfalto (tile 2×2) | 264 |
| <img src="previews/ruas/calcada.jpg" width="120" alt="Calçada (tile 2×2)"> | [`calcada`](models/ruas/calcada.glb) | Calçada (tile 2×2) | 108 |
| <img src="previews/ruas/estacionamento.jpg" width="120" alt="Estacionamento (tile 2×2)"> | [`estacionamento`](models/ruas/estacionamento.glb) | Estacionamento (tile 2×2) | 320 |
| <img src="previews/ruas/ponte.jpg" width="120" alt="Ponte de concreto (tile 2×2, substitui um tile de água)"> | [`ponte`](models/ruas/ponte.glb) | Ponte de concreto (tile 2×2, substitui um tile de água) | 428 |
| <img src="previews/ruas/praca.jpg" width="120" alt="Praça (tile 2×2)"> | [`praca`](models/ruas/praca.glb) | Praça (tile 2×2) | 496 |
| <img src="previews/ruas/terra_curva.jpg" width="120" alt="Estrada de terra em curva (tile 2×2)"> | [`terra_curva`](models/ruas/terra_curva.glb) | Estrada de terra em curva (tile 2×2) | 484 |
| <img src="previews/ruas/terra_reta.jpg" width="120" alt="Estrada de terra reta (tile 2×2)"> | [`terra_reta`](models/ruas/terra_reta.glb) | Estrada de terra reta (tile 2×2) | 160 |

### Terreno (peças modulares 2 × 2) · Terrain (modular 2 × 2 tiles) (9)

![Modelos 3D low poly: Terreno (peças modulares 2 × 2)](previews/terreno.jpg)

| | Modelo | Descrição | Tris |
|---|---|---|---:|
| <img src="previews/terreno/agua.jpg" width="120" alt="Água (tile 2×2)"> | [`agua`](models/terreno/agua.glb) | Água (tile 2×2) | 48 |
| <img src="previews/terreno/areia.jpg" width="120" alt="Terreno de areia (tile 2×2)"> | [`areia`](models/terreno/areia.glb) | Terreno de areia (tile 2×2) | 90 |
| <img src="previews/terreno/arvores_mata.jpg" width="120" alt="Mata (tile 2×2)"> | [`arvores_mata`](models/terreno/arvores_mata.glb) | Mata (tile 2×2) | 208 |
| <img src="previews/terreno/grama.jpg" width="120" alt="Terreno de grama (tile 2×2)"> | [`grama`](models/terreno/grama.glb) | Terreno de grama (tile 2×2) | 24 |
| <img src="previews/terreno/margem_canto.jpg" width="120" alt="Margem em canto (tile 2×2)"> | [`margem_canto`](models/terreno/margem_canto.glb) | Margem em canto (tile 2×2) | 320 |
| <img src="previews/terreno/margem_reta.jpg" width="120" alt="Margem reta de rio (tile 2×2)"> | [`margem_reta`](models/terreno/margem_reta.glb) | Margem reta de rio (tile 2×2) | 148 |
| <img src="previews/terreno/morro.jpg" width="120" alt="Morro (tile 2×2)"> | [`morro`](models/terreno/morro.glb) | Morro (tile 2×2) | 108 |
| <img src="previews/terreno/rampa.jpg" width="120" alt="Rampa de terreno (tile 2×2)"> | [`rampa`](models/terreno/rampa.glb) | Rampa de terreno (tile 2×2) | 56 |
| <img src="previews/terreno/terra.jpg" width="120" alt="Terreno de terra batida (tile 2×2)"> | [`terra`](models/terreno/terra.glb) | Terreno de terra batida (tile 2×2) | 144 |

### Veículos · Vehicles (10)

![Modelos 3D low poly: Veículos](previews/veiculos.jpg)

| | Modelo | Descrição | Tris |
|---|---|---|---:|
| <img src="previews/veiculos/ambulancia.jpg" width="120" alt="Ambulância (furgão)"> | [`ambulancia`](models/veiculos/ambulancia.glb) | Ambulância (furgão) | 624 |
| <img src="previews/veiculos/bicicleta.jpg" width="120" alt="Bicicleta solta"> | [`bicicleta`](models/veiculos/bicicleta.glb) | Bicicleta solta | 332 |
| <img src="previews/veiculos/caminhao.jpg" width="120" alt="Caminhão baú"> | [`caminhao`](models/veiculos/caminhao.glb) | Caminhão baú | 676 |
| <img src="previews/veiculos/caminhao_bombeiros.jpg" width="120" alt="Caminhão de bombeiros"> | [`caminhao_bombeiros`](models/veiculos/caminhao_bombeiros.glb) | Caminhão de bombeiros | 1028 |
| <img src="previews/veiculos/caminhao_lixo.jpg" width="120" alt="Caminhão de lixo (coletor compactador)"> | [`caminhao_lixo`](models/veiculos/caminhao_lixo.glb) | Caminhão de lixo (coletor compactador) | 616 |
| <img src="previews/veiculos/caminhao_pipa.jpg" width="120" alt="Caminhão-pipa"> | [`caminhao_pipa`](models/veiculos/caminhao_pipa.glb) | Caminhão-pipa | 856 |
| <img src="previews/veiculos/carro.jpg" width="120" alt="Carro hatch vermelho"> | [`carro`](models/veiculos/carro.glb) | Carro hatch vermelho | 464 |
| <img src="previews/veiculos/carro_eletrico.jpg" width="120" alt="Carro elétrico"> | [`carro_eletrico`](models/veiculos/carro_eletrico.glb) | Carro elétrico | 488 |
| <img src="previews/veiculos/onibus.jpg" width="120" alt="Ônibus urbano"> | [`onibus`](models/veiculos/onibus.glb) | Ônibus urbano | 616 |
| <img src="previews/veiculos/taxi.jpg" width="120" alt="Táxi"> | [`taxi`](models/veiculos/taxi.glb) | Táxi | 520 |

### Mobiliário urbano · Street furniture (20)

![Modelos 3D low poly: Mobiliário urbano](previews/mobiliario.jpg)

| | Modelo | Descrição | Tris |
|---|---|---|---:|
| <img src="previews/mobiliario/banco_praca.jpg" width="120" alt="Banco de praça"> | [`banco_praca`](models/mobiliario/banco_praca.glb) | Banco de praça | 420 |
| <img src="previews/mobiliario/barril_chuva.jpg" width="120" alt="Barril de captação de chuva"> | [`barril_chuva`](models/mobiliario/barril_chuva.glb) | Barril de captação de chuva | 672 |
| <img src="previews/mobiliario/bebedouro.jpg" width="120" alt="Bebedouro público"> | [`bebedouro`](models/mobiliario/bebedouro.glb) | Bebedouro público | 472 |
| <img src="previews/mobiliario/bicicletario.jpg" width="120" alt="Bicicletário"> | [`bicicletario`](models/mobiliario/bicicletario.glb) | Bicicletário | 476 |
| <img src="previews/mobiliario/cerca_madeira.jpg" width="120" alt="Cerca de madeira (trecho de 2 unidades ao longo de X)"> | [`cerca_madeira`](models/mobiliario/cerca_madeira.glb) | Cerca de madeira (trecho de 2 unidades ao longo de X) | 348 |
| <img src="previews/mobiliario/cisterna.jpg" width="120" alt="Cisterna de placas (semiárido)"> | [`cisterna`](models/mobiliario/cisterna.glb) | Cisterna de placas (semiárido) | 600 |
| <img src="previews/mobiliario/hidrante.jpg" width="120" alt="Hidrante de rua"> | [`hidrante`](models/mobiliario/hidrante.glb) | Hidrante de rua | 422 |
| <img src="previews/mobiliario/lixeira.jpg" width="120" alt="Lixeira comum de calçada (papeleira)"> | [`lixeira`](models/mobiliario/lixeira.glb) | Lixeira comum de calçada (papeleira) | 284 |
| <img src="previews/mobiliario/lixeira_seletiva.jpg" width="120" alt="Lixeira seletiva de rua"> | [`lixeira_seletiva`](models/mobiliario/lixeira_seletiva.glb) | Lixeira seletiva de rua | 936 |
| <img src="previews/mobiliario/orelhao.jpg" width="120" alt="Orelhão (telefone público brasileiro)"> | [`orelhao`](models/mobiliario/orelhao.glb) | Orelhão (telefone público brasileiro) | 276 |
| <img src="previews/mobiliario/parquinho.jpg" width="120" alt="Parquinho"> | [`parquinho`](models/mobiliario/parquinho.glb) | Parquinho | 596 |
| <img src="previews/mobiliario/placa_educativa.jpg" width="120" alt="Placa educativa de beira de rio"> | [`placa_educativa`](models/mobiliario/placa_educativa.glb) | Placa educativa de beira de rio | 274 |
| <img src="previews/mobiliario/placa_pare.jpg" width="120" alt="Placa de parada obrigatória"> | [`placa_pare`](models/mobiliario/placa_pare.glb) | Placa de parada obrigatória | 136 |
| <img src="previews/mobiliario/ponto_onibus.jpg" width="120" alt="Ponto de ônibus com telhado verde"> | [`ponto_onibus`](models/mobiliario/ponto_onibus.glb) | Ponto de ônibus com telhado verde | 480 |
| <img src="previews/mobiliario/poste_luz.jpg" width="120" alt="Poste de iluminação comum"> | [`poste_luz`](models/mobiliario/poste_luz.glb) | Poste de iluminação comum | 236 |
| <img src="previews/mobiliario/poste_solar.jpg" width="120" alt="Poste solar"> | [`poste_solar`](models/mobiliario/poste_solar.glb) | Poste solar | 320 |
| <img src="previews/mobiliario/quiosque.jpg" width="120" alt="Quiosque de praça"> | [`quiosque`](models/mobiliario/quiosque.glb) | Quiosque de praça | 462 |
| <img src="previews/mobiliario/semaforo.jpg" width="120" alt="Semáforo veicular de esquina"> | [`semaforo`](models/mobiliario/semaforo.glb) | Semáforo veicular de esquina | 480 |
| <img src="previews/mobiliario/semaforo_pedestre.jpg" width="120" alt="Semáforo de pedestre"> | [`semaforo_pedestre`](models/mobiliario/semaforo_pedestre.glb) | Semáforo de pedestre | 212 |
| <img src="previews/mobiliario/vaso_planta.jpg" width="120" alt="Floreira de concreto de calçada"> | [`vaso_planta`](models/mobiliario/vaso_planta.glb) | Floreira de concreto de calçada | 328 |

### Vegetação · Vegetation (7)

![Modelos 3D low poly: Vegetação](previews/vegetacao.jpg)

| | Modelo | Descrição | Tris |
|---|---|---|---:|
| <img src="previews/vegetacao/araucaria.jpg" width="120" alt="Araucária (pinheiro-do-paraná)"> | [`araucaria`](models/vegetacao/araucaria.glb) | Araucária (pinheiro-do-paraná) | 548 |
| <img src="previews/vegetacao/arbustos.jpg" width="120" alt="Conjunto de arbustos para canteiro"> | [`arbustos`](models/vegetacao/arbustos.glb) | Conjunto de arbustos para canteiro | 200 |
| <img src="previews/vegetacao/buriti.jpg" width="120" alt="Buriti (palmeira das veredas)"> | [`buriti`](models/vegetacao/buriti.glb) | Buriti (palmeira das veredas) | 636 |
| <img src="previews/vegetacao/composteira.jpg" width="120" alt="Composteira de dois módulos de ripas de madeira"> | [`composteira`](models/vegetacao/composteira.glb) | Composteira de dois módulos de ripas de madeira | 1332 |
| <img src="previews/vegetacao/horta.jpg" width="120" alt="Canteiro de horta comunitária"> | [`horta`](models/vegetacao/horta.glb) | Canteiro de horta comunitária | 494 |
| <img src="previews/vegetacao/ipe_amarelo.jpg" width="120" alt="Ipê-amarelo (árvore nativa)"> | [`ipe_amarelo`](models/vegetacao/ipe_amarelo.glb) | Ipê-amarelo (árvore nativa) | 388 |
| <img src="previews/vegetacao/pedras.jpg" width="120" alt="Conjunto de pedras de beira de rio"> | [`pedras`](models/vegetacao/pedras.glb) | Conjunto de pedras de beira de rio | 108 |

### Beira-rio · Riverside (6)

![Modelos 3D low poly: Beira-rio](previews/beira_rio.jpg)

| | Modelo | Descrição | Tris |
|---|---|---|---:|
| <img src="previews/beira_rio/barco_pesca.jpg" width="120" alt="Barco de pesca pequeno a motor sobre um pedaço de água"> | [`barco_pesca`](models/beira_rio/barco_pesca.glb) | Barco de pesca pequeno a motor sobre um pedaço de água | 412 |
| <img src="previews/beira_rio/boia_rio.jpg" width="120" alt="Boia de monitoramento do rio"> | [`boia_rio`](models/beira_rio/boia_rio.glb) | Boia de monitoramento do rio | 364 |
| <img src="previews/beira_rio/canoa.jpg" width="120" alt="Canoa de madeira de pescador num remanso do rio"> | [`canoa`](models/beira_rio/canoa.glb) | Canoa de madeira de pescador num remanso do rio | 296 |
| <img src="previews/beira_rio/capivara.jpg" width="120" alt="Capivara estilizada num pedaço de grama da margem"> | [`capivara`](models/beira_rio/capivara.glb) | Capivara estilizada num pedaço de grama da margem | 300 |
| <img src="previews/beira_rio/garca.jpg" width="120" alt="Garça-branca em pé numa pedra da beira do rio"> | [`garca`](models/beira_rio/garca.glb) | Garça-branca em pé numa pedra da beira do rio | 222 |
| <img src="previews/beira_rio/trapiche.jpg" width="120" alt="Trapiche (píer curto de madeira)"> | [`trapiche`](models/beira_rio/trapiche.glb) | Trapiche (píer curto de madeira) | 570 |

<!-- catalogo:fim -->

## Como gerar ou modificar

Cada modelo é um script Python em `src/<categoria>/<id>.py` que usa as peças da biblioteca [`src/lib.py`](src/lib.py)
(caixas, cilindros, canos, telhados, janelas, árvores…) e a paleta de cores única. Precisa do Blender 4.5 LTS.

```bash
blender -b --factory-startup --python src/agua/eta.py                 # um modelo → models/agua/eta.glb
blender -b --factory-startup --python src/gerar_todos.py              # todos (+ models/catalogo.json)
blender -b --factory-startup --python src/gerar_todos.py -- ruas      # só uma categoria
blender -b --factory-startup --python src/vitrine.py -- tudo --cada   # imagens em previews/
blender -b --factory-startup --python src/cena_cidade.py              # previews/capa.jpg (bairro de exemplo)
py -3 tools/atualizar_readme.py                                       # refaz o catálogo acima
```

Para criar um modelo novo: copie um script parecido, monte a peça com a **frente para -Y do Blender** (o
`exportar` gira 180° para a frente ficar em -Z no glTF) e use só cores de `PALETA`.

## Perguntas frequentes

**Posso usar os modelos num jogo comercial?**
Pode. Tudo está em domínio público (CC0 1.0): uso comercial, modificação e redistribuição liberados, sem pedir
autorização e sem pagar nada.

**Preciso dar crédito?**
Não. A atribuição é opcional. Se quiser citar, os dados estão em [CITATION.cff](CITATION.cff).

**Em que formato estão os modelos?**
glTF binário (`.glb`), com Y para cima, frente para -Z e um material PBR por cor (só cor base, sem texturas
nem UV).

**Funciona no Godot, no Unity, no Unreal e no three.js?**
Funciona. O `.glb` abre direto no Godot 4, no three.js (`GLTFLoader`), no Babylon.js, no Blender e no Unreal 5
(Interchange). No Unity, use o pacote glTFast.

**Qual é a escala?**
1 lote = 2 × 2 unidades. Os prédios ocupam N × N lotes, e as peças de rua e de terreno têm exatamente 2 × 2
para encaixar numa grade.

**Os modelos são leves para celular e web?**
São. Cada modelo tem no máximo 1.500 triângulos e 150 KB, sem texturas. Juntando os materiais em cor de
vértice, um bairro inteiro cabe em poucas chamadas de desenho.

**Posso pedir ou criar um modelo novo?**
Pode. Cada modelo é um script Python curto no Blender (veja [Como gerar ou modificar](#como-gerar-ou-modificar)).
Para pedir um modelo, abra uma issue.

## Origem e créditos

O kit nasceu dos modelos próprios do jogo educativo [Guardião da Água](https://github.com/kayquer/guardiao_da_agua_js),
produto da pesquisa de mestrado de Cláudia Dias Roxinol (Unesp, Presidente Prudente), desenvolvido com Kayque
Rotondo. Os modelos e scripts foram feitos com o Blender e com o Claude (Anthropic) como assistente. Nenhum modelo
de terceiros faz parte deste repositório.
