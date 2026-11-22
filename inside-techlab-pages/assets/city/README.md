# Low Poly City Kit: 129 free CC0 low poly 3D models for city builders

🇬🇧 English · **🇧🇷 [Leia em português](README.pt-BR.md)**

![Low poly neighborhood built with the Low Poly City Kit: houses, modular roads, trees and vehicles](previews/capa.jpg)

https://github.com/user-attachments/assets/9e1bd911-9ffb-4aa4-b0b1-4a5edbcdbd48

▶️ **[Watch the video on YouTube](https://www.youtube.com/watch?v=o9hur_gAZ-k)** · **[Download on itch.io](https://kkyqr.itch.io/low-poly-city-kit)** (free, optional donation)

> **Short answer:** the Low Poly City Kit (*Kit Cidade Low Poly*) is a **free, public domain (CC0 1.0)** pack of
> **129 low poly 3D models in glTF/GLB** for building cities in games and visualizations: houses, shops, public
> services, water and sanitation, renewable energy, waste and recycling, parks, modular road and terrain tiles
> (2 × 2), vehicles, street furniture, Brazilian native trees (yellow ipê, araucaria, buriti palm) and riverside
> props. Flat colors, no textures, at most 1,500 triangles per model. Works in Godot, Unity, Unreal, three.js,
> Babylon.js and Blender. Commercial use is allowed and attribution is optional.

Free **low poly 3D models** for building cities: houses, commercial buildings, public services, water and
sanitation, energy, waste, parks, modular roads and terrain, vehicles, street furniture, Brazilian native
vegetation and riverside props. Everything is **binary glTF (`.glb`)** with flat colors and no textures, ready for
Godot, Unity, Unreal Engine, Babylon.js, three.js, Blender and more. Great for **city builders, tycoon and
simulation games, educational games, isometric game prototypes, game jams and architectural mockups**.

**Public domain ([CC0 1.0](LICENSE)).** Use it however you like, in personal, educational or commercial
projects; modify and redistribute it. Attribution is optional (see [CITATION.cff](CITATION.cff)). No warranty.

**Contents:** [How to use](#how-to-use) · [Catalog](#catalog) · [Build or modify](#build-or-modify-the-models) ·
[FAQ](#faq) · [Origin and credits](#origin-and-credits)

> File and folder names are in Portuguese (for example `residencial/casa_simples.glb` = small house). The catalog
> below lists every file with its English name.

## How to use

- Download the repository (**Code → Download ZIP**) or just the `.glb` files you need from [`models/`](models).
- **Scale and grid:** 1 lot = 2 × 2 units. Buildings take N × N lots; road and terrain pieces are exactly
  2 × 2 tiles that snap side by side; vehicles, props and street furniture use a "toy" scale that matches the lots.
- **Orientation:** Y up, model front facing **-Z** (glTF convention).
- **Materials:** one material per color (PBR, base color only, roughness 0.85). To batch everything into a
  single draw call, convert material colors into vertex colors in your engine.
- **Animatable parts:** objects named `pas_N` (rotors, spin around the hub axis) and `gira_N` (spin upright)
  are kept separate from the body, with the pivot in place.
- **Budget:** at most 1,500 triangles and 150 KB per model.

### Modular roads and terrain

Pieces in `ruas/` (roads) and `terreno/` (terrain) cover exactly x, z ∈ [-1, 1] and snap to a 2-unit grid,
rotating in 90° steps around Y. Measurements in glTF space (Y up):

| Element | Measurement |
|---|---|
| Terrain block | y -0.3 to 0 (grass top at 0); road tiles already include the block below and **replace** the terrain tile |
| Asphalt | 1.3 wide, centered (\|x\| ≤ 0.65), top at y 0.04, dashed yellow center line |
| Curb and sidewalk | curb top at 0.075; sidewalk from \|x\| 0.65 to 1.0, top at 0.07 |
| Dirt road | same width as asphalt, top at y 0.02, no sidewalk |
| Water | surface at y -0.12; sand bank step at y -0.06 |
| Hill | top at y 0.6; `rampa` (ramp) rises from 0 (-Z edge) to 0.6 (+Z edge) |

Connections without rotation: `asfalto_reta`, `asfalto_faixa_pedestre`, `terra_reta` and `ponte` connect -Z and
+Z; `asfalto_curva` and `terra_curva` connect -Z and -X; `asfalto_t` connects -Z, +Z and -X; `asfalto_ponta`
only -Z; `estacionamento` (parking lot) opens to -Z; `margem_reta` (riverbank) has water on the -Z half;
`margem_canto` has water in a quarter circle at the (+X, -Z) corner. See a sample neighborhood in
[`src/cena_cidade.py`](src/cena_cidade.py).

## Catalog

<!-- catalogo:inicio -->
**129 models** in 14 categories.

### Residential · Residencial (5)

![Low poly residential 3D models](previews/residencial.jpg)

| | Model | Description | Tris |
|---|---|---|---:|
| <img src="previews/residencial/casa_simples.jpg" width="120" alt="Small house (1×1)"> | [`casa_simples`](models/residencial/casa_simples.glb) | Small house (1×1) | 584 |
| <img src="previews/residencial/casa_sobrado.jpg" width="120" alt="Two-story house (1×1)"> | [`casa_sobrado`](models/residencial/casa_sobrado.glb) | Two-story house (1×1) | 564 |
| <img src="previews/residencial/casas_geminadas.jpg" width="120" alt="Semi-detached houses (1×1)"> | [`casas_geminadas`](models/residencial/casas_geminadas.glb) | Semi-detached houses (1×1) | 588 |
| <img src="previews/residencial/predio_alto.jpg" width="120" alt="Residential high-rise (1×1)"> | [`predio_alto`](models/residencial/predio_alto.glb) | Residential high-rise (1×1) | 1008 |
| <img src="previews/residencial/predio_apartamentos.jpg" width="120" alt="Apartment building (1×1)"> | [`predio_apartamentos`](models/residencial/predio_apartamentos.glb) | Apartment building (1×1) | 1208 |

### Commercial · Comércio (8)

![Low poly commercial 3D models](previews/comercial.jpg)

| | Model | Description | Tris |
|---|---|---|---:|
| <img src="previews/comercial/banco.jpg" width="120" alt="Bank branch (1×1)"> | [`banco`](models/comercial/banco.glb) | Bank branch (1×1) | 662 |
| <img src="previews/comercial/escritorio.jpg" width="120" alt="Office building (1×1)"> | [`escritorio`](models/comercial/escritorio.glb) | Office building (1×1) | 820 |
| <img src="previews/comercial/hotel.jpg" width="120" alt="Hotel (1×1)"> | [`hotel`](models/comercial/hotel.glb) | Hotel (1×1) | 678 |
| <img src="previews/comercial/loja_esquina.jpg" width="120" alt="Corner shop (1×1)"> | [`loja_esquina`](models/comercial/loja_esquina.glb) | Corner shop (1×1) | 652 |
| <img src="previews/comercial/mercado.jpg" width="120" alt="Neighborhood grocery store (1×1)"> | [`mercado`](models/comercial/mercado.glb) | Neighborhood grocery store (1×1) | 512 |
| <img src="previews/comercial/posto_recarga.jpg" width="120" alt="Electric car charging station (1×1)"> | [`posto_recarga`](models/comercial/posto_recarga.glb) | Electric car charging station (1×1) | 636 |
| <img src="previews/comercial/restaurante.jpg" width="120" alt="Restaurant (1×1)"> | [`restaurante`](models/comercial/restaurante.glb) | Restaurant (1×1) | 738 |
| <img src="previews/comercial/shopping.jpg" width="120" alt="Shopping mall (2×2)"> | [`shopping`](models/comercial/shopping.glb) | Shopping mall (2×2) | 796 |

### Public services · Serviços públicos (12)

![Low poly public services 3D models](previews/publicos.jpg)

| | Model | Description | Tris |
|---|---|---|---:|
| <img src="previews/publicos/biblioteca.jpg" width="120" alt="Public library (1×1)"> | [`biblioteca`](models/publicos/biblioteca.glb) | Public library (1×1) | 812 |
| <img src="previews/publicos/bombeiros.jpg" width="120" alt="Fire station (1×1)"> | [`bombeiros`](models/publicos/bombeiros.glb) | Fire station (1×1) | 670 |
| <img src="previews/publicos/centro_pesquisa.jpg" width="120" alt="Research center (2×2)"> | [`centro_pesquisa`](models/publicos/centro_pesquisa.glb) | Research center (2×2) | 952 |
| <img src="previews/publicos/centro_tecnologia.jpg" width="120" alt="Technology center (1×1)"> | [`centro_tecnologia`](models/publicos/centro_tecnologia.glb) | Technology center (1×1) | 686 |
| <img src="previews/publicos/escola.jpg" width="120" alt="School (2×2)"> | [`escola`](models/publicos/escola.glb) | School (2×2) | 1328 |
| <img src="previews/publicos/hospital.jpg" width="120" alt="Hospital (2×2)"> | [`hospital`](models/publicos/hospital.glb) | Hospital (2×2) | 1224 |
| <img src="previews/publicos/monumento.jpg" width="120" alt="Historic monument (2×2)"> | [`monumento`](models/publicos/monumento.glb) | Historic monument (2×2) | 1154 |
| <img src="previews/publicos/museu.jpg" width="120" alt="Museum (3×3)"> | [`museu`](models/publicos/museu.glb) | Museum (3×3) | 1238 |
| <img src="previews/publicos/policia.jpg" width="120" alt="Police station (1×1)"> | [`policia`](models/publicos/policia.glb) | Police station (1×1) | 772 |
| <img src="previews/publicos/posto_saude.jpg" width="120" alt="Health clinic (1×1)"> | [`posto_saude`](models/publicos/posto_saude.glb) | Health clinic (1×1) | 724 |
| <img src="previews/publicos/prefeitura.jpg" width="120" alt="City hall (2×2)"> | [`prefeitura`](models/publicos/prefeitura.glb) | City hall (2×2) | 1146 |
| <img src="previews/publicos/universidade.jpg" width="120" alt="University (3×3)"> | [`universidade`](models/publicos/universidade.glb) | University (3×3) | 1352 |

### Industry · Indústria (4)

![Low poly industry 3D models](previews/industrial.jpg)

| | Model | Description | Tris |
|---|---|---|---:|
| <img src="previews/industrial/fabrica.jpg" width="120" alt="Factory (2×2)"> | [`fabrica`](models/industrial/fabrica.glb) | Factory (2×2) | 1372 |
| <img src="previews/industrial/galpao.jpg" width="120" alt="Warehouse (1×1)"> | [`galpao`](models/industrial/galpao.glb) | Warehouse (1×1) | 748 |
| <img src="previews/industrial/oficina.jpg" width="120" alt="Car repair shop (1×1)"> | [`oficina`](models/industrial/oficina.glb) | Car repair shop (1×1) | 1164 |
| <img src="previews/industrial/porto.jpg" width="120" alt="Port (2×2, on water)"> | [`porto`](models/industrial/porto.glb) | Port (2×2, on water) | 1020 |

### Water and sanitation · Água e saneamento (16)

![Low poly water and sanitation 3D models](previews/agua.jpg)

| | Model | Description | Tris |
|---|---|---|---:|
| <img src="previews/agua/barragem_subterranea.jpg" width="120" alt="Underground dam (2×2)"> | [`barragem_subterranea`](models/agua/barragem_subterranea.glb) | Underground dam (2×2) | 592 |
| <img src="previews/agua/bomba_agua.jpg" width="120" alt="Water pump station (1×1)"> | [`bomba_agua`](models/agua/bomba_agua.glb) | Water pump station (1×1) | 440 |
| <img src="previews/agua/caixa_dagua.jpg" width="120" alt="Elevated water tower (1×1)"> | [`caixa_dagua`](models/agua/caixa_dagua.glb) | Elevated water tower (1×1) | 1232 |
| <img src="previews/agua/centro_controle_perdas.jpg" width="120" alt="Water loss control center (2×2)"> | [`centro_controle_perdas`](models/agua/centro_controle_perdas.glb) | Water loss control center (2×2) | 964 |
| <img src="previews/agua/centro_pesquisa_agua.jpg" width="120" alt="Water research center (3×3)"> | [`centro_pesquisa_agua`](models/agua/centro_pesquisa_agua.glb) | Water research center (3×3) | 1112 |
| <img src="previews/agua/estacao_filtragem.jpg" width="120" alt="Filtration station (1×1)"> | [`estacao_filtragem`](models/agua/estacao_filtragem.glb) | Filtration station (1×1) | 984 |
| <img src="previews/agua/estacao_monitoramento.jpg" width="120" alt="Monitoring station (1×1)"> | [`estacao_monitoramento`](models/agua/estacao_monitoramento.glb) | Monitoring station (1×1) | 684 |
| <img src="previews/agua/eta.jpg" width="120" alt="Water treatment plant (2×2)"> | [`eta`](models/agua/eta.glb) | Water treatment plant (2×2) | 1268 |
| <img src="previews/agua/ete.jpg" width="120" alt="Sewage treatment plant (2×2)"> | [`ete`](models/agua/ete.glb) | Sewage treatment plant (2×2) | 1232 |
| <img src="previews/agua/jardim_chuva.jpg" width="120" alt="Rain garden (2×2)"> | [`jardim_chuva`](models/agua/jardim_chuva.glb) | Rain garden (2×2) | 776 |
| <img src="previews/agua/jardim_flutuante.jpg" width="120" alt="Floating garden (3×3, on water)"> | [`jardim_flutuante`](models/agua/jardim_flutuante.glb) | Floating garden (3×3, on water) | 1212 |
| <img src="previews/agua/monitor_qualidade_agua.jpg" width="120" alt="Water quality monitor (1×1)"> | [`monitor_qualidade_agua`](models/agua/monitor_qualidade_agua.glb) | Water quality monitor (1×1) | 508 |
| <img src="previews/agua/poco_artesiano.jpg" width="120" alt="Artesian well (1×1)"> | [`poco_artesiano`](models/agua/poco_artesiano.glb) | Artesian well (1×1) | 656 |
| <img src="previews/agua/reservatorio.jpg" width="120" alt="Water reservoir (1×1)"> | [`reservatorio`](models/agua/reservatorio.glb) | Water reservoir (1×1) | 868 |
| <img src="previews/agua/usina_dessalinizacao.jpg" width="120" alt="Desalination plant (3×3)"> | [`usina_dessalinizacao`](models/agua/usina_dessalinizacao.glb) | Desalination plant (3×3) | 1468 |
| <img src="previews/agua/usina_reuso_agua.jpg" width="120" alt="Water reuse plant (3×3)"> | [`usina_reuso_agua`](models/agua/usina_reuso_agua.glb) | Water reuse plant (3×3) | 938 |

### Energy · Energia (11)

![Low poly energy 3D models](previews/energia.jpg)

| | Model | Description | Tris |
|---|---|---|---:|
| <img src="previews/energia/biodigestor.jpg" width="120" alt="Biodigester (2×2)"> | [`biodigestor`](models/energia/biodigestor.glb) | Biodigester (2×2) | 1408 |
| <img src="previews/energia/hidreletrica.jpg" width="120" alt="Hydroelectric dam (3×3, on water)"> | [`hidreletrica`](models/energia/hidreletrica.glb) | Hydroelectric dam (3×3, on water) | 972 |
| <img src="previews/energia/parque_eolico.jpg" width="120" alt="Wind farm (2×2)"> | [`parque_eolico`](models/energia/parque_eolico.glb) | Wind farm (2×2) | 846 |
| <img src="previews/energia/poste_energia.jpg" width="120" alt="Power line pole (1×1)"> | [`poste_energia`](models/energia/poste_energia.glb) | Power line pole (1×1) | 264 |
| <img src="previews/energia/termeletrica.jpg" width="120" alt="Thermal power plant (2×2)"> | [`termeletrica`](models/energia/termeletrica.glb) | Thermal power plant (2×2) | 844 |
| <img src="previews/energia/usina_biomassa.jpg" width="120" alt="Biomass power plant (2×2)"> | [`usina_biomassa`](models/energia/usina_biomassa.glb) | Biomass power plant (2×2) | 1056 |
| <img src="previews/energia/usina_cana.jpg" width="120" alt="Sugarcane ethanol and bioenergy mill (3×3)"> | [`usina_cana`](models/energia/usina_cana.glb) | Sugarcane ethanol and bioenergy mill (3×3) | 1440 |
| <img src="previews/energia/usina_carvao.jpg" width="120" alt="Coal power plant (2×2)"> | [`usina_carvao`](models/energia/usina_carvao.glb) | Coal power plant (2×2) | 512 |
| <img src="previews/energia/usina_mare.jpg" width="120" alt="Tidal power plant (2×2, on water)"> | [`usina_mare`](models/energia/usina_mare.glb) | Tidal power plant (2×2, on water) | 640 |
| <img src="previews/energia/usina_nuclear.jpg" width="120" alt="Nuclear power plant (4×4)"> | [`usina_nuclear`](models/energia/usina_nuclear.glb) | Nuclear power plant (4×4) | 1488 |
| <img src="previews/energia/usina_solar.jpg" width="120" alt="Solar farm (3×3)"> | [`usina_solar`](models/energia/usina_solar.glb) | Solar farm (3×3) | 944 |

### Waste and recycling · Resíduos (4)

![Low poly waste and recycling 3D models](previews/residuos.jpg)

| | Model | Description | Tris |
|---|---|---|---:|
| <img src="previews/residuos/aterro_sanitario.jpg" width="120" alt="Sanitary landfill (3×3)"> | [`aterro_sanitario`](models/residuos/aterro_sanitario.glb) | Sanitary landfill (3×3) | 1482 |
| <img src="previews/residuos/cooperativa_reciclagem.jpg" width="120" alt="Recycling cooperative (2×2)"> | [`cooperativa_reciclagem`](models/residuos/cooperativa_reciclagem.glb) | Recycling cooperative (2×2) | 1302 |
| <img src="previews/residuos/patio_compostagem.jpg" width="120" alt="Composting yard (2×2)"> | [`patio_compostagem`](models/residuos/patio_compostagem.glb) | Composting yard (2×2) | 1158 |
| <img src="previews/residuos/ponto_coleta.jpg" width="120" alt="Recycling drop-off point (1×1)"> | [`ponto_coleta`](models/residuos/ponto_coleta.glb) | Recycling drop-off point (1×1) | 832 |

### Parks · Parques (5)

![Low poly parks 3D models](previews/parques.jpg)

| | Model | Description | Tris |
|---|---|---|---:|
| <img src="previews/parques/ecoparque.jpg" width="120" alt="Eco park (3×3)"> | [`ecoparque`](models/parques/ecoparque.glb) | Eco park (3×3) | 1480 |
| <img src="previews/parques/parede_verde.jpg" width="120" alt="Green wall (1×1)"> | [`parede_verde`](models/parques/parede_verde.glb) | Green wall (1×1) | 876 |
| <img src="previews/parques/parque.jpg" width="120" alt="Tourist park (4×4)"> | [`parque`](models/parques/parque.glb) | Tourist park (4×4) | 1484 |
| <img src="previews/parques/parque_linear.jpg" width="120" alt="Linear park (3×3)"> | [`parque_linear`](models/parques/parque_linear.glb) | Linear park (3×3) | 900 |
| <img src="previews/parques/telhado_verde.jpg" width="120" alt="Green roof building (2×2)"> | [`telhado_verde`](models/parques/telhado_verde.glb) | Green roof building (2×2) | 1332 |

### Roads (modular 2 × 2 tiles) · Ruas (peças modulares 2 × 2) (12)

![Low poly roads 3D models](previews/ruas.jpg)

| | Model | Description | Tris |
|---|---|---|---:|
| <img src="previews/ruas/asfalto_cruzamento.jpg" width="120" alt="Asphalt crossroads (2×2 tile)"> | [`asfalto_cruzamento`](models/ruas/asfalto_cruzamento.glb) | Asphalt crossroads (2×2 tile) | 492 |
| <img src="previews/ruas/asfalto_curva.jpg" width="120" alt="Curved asphalt road (2×2 tile)"> | [`asfalto_curva`](models/ruas/asfalto_curva.glb) | Curved asphalt road (2×2 tile) | 548 |
| <img src="previews/ruas/asfalto_faixa_pedestre.jpg" width="120" alt="Straight asphalt road with crosswalk (2×2 tile)"> | [`asfalto_faixa_pedestre`](models/ruas/asfalto_faixa_pedestre.glb) | Straight asphalt road with crosswalk (2×2 tile) | 228 |
| <img src="previews/ruas/asfalto_ponta.jpg" width="120" alt="Dead end with turnaround (2×2 tile)"> | [`asfalto_ponta`](models/ruas/asfalto_ponta.glb) | Dead end with turnaround (2×2 tile) | 524 |
| <img src="previews/ruas/asfalto_reta.jpg" width="120" alt="Straight asphalt road (2×2 tile)"> | [`asfalto_reta`](models/ruas/asfalto_reta.glb) | Straight asphalt road (2×2 tile) | 132 |
| <img src="previews/ruas/asfalto_t.jpg" width="120" alt="Asphalt T-junction (2×2 tile)"> | [`asfalto_t`](models/ruas/asfalto_t.glb) | Asphalt T-junction (2×2 tile) | 264 |
| <img src="previews/ruas/calcada.jpg" width="120" alt="Sidewalk (2×2 tile)"> | [`calcada`](models/ruas/calcada.glb) | Sidewalk (2×2 tile) | 108 |
| <img src="previews/ruas/estacionamento.jpg" width="120" alt="Parking lot (2×2 tile)"> | [`estacionamento`](models/ruas/estacionamento.glb) | Parking lot (2×2 tile) | 320 |
| <img src="previews/ruas/ponte.jpg" width="120" alt="Concrete bridge (2×2 tile, replaces a water tile)"> | [`ponte`](models/ruas/ponte.glb) | Concrete bridge (2×2 tile, replaces a water tile) | 428 |
| <img src="previews/ruas/praca.jpg" width="120" alt="Town square (2×2 tile)"> | [`praca`](models/ruas/praca.glb) | Town square (2×2 tile) | 496 |
| <img src="previews/ruas/terra_curva.jpg" width="120" alt="Curved dirt road (2×2 tile)"> | [`terra_curva`](models/ruas/terra_curva.glb) | Curved dirt road (2×2 tile) | 484 |
| <img src="previews/ruas/terra_reta.jpg" width="120" alt="Straight dirt road (2×2 tile)"> | [`terra_reta`](models/ruas/terra_reta.glb) | Straight dirt road (2×2 tile) | 160 |

### Terrain (modular 2 × 2 tiles) · Terreno (peças modulares 2 × 2) (9)

![Low poly terrain 3D models](previews/terreno.jpg)

| | Model | Description | Tris |
|---|---|---|---:|
| <img src="previews/terreno/agua.jpg" width="120" alt="Water (2×2 tile)"> | [`agua`](models/terreno/agua.glb) | Water (2×2 tile) | 48 |
| <img src="previews/terreno/areia.jpg" width="120" alt="Sand (2×2 tile)"> | [`areia`](models/terreno/areia.glb) | Sand (2×2 tile) | 90 |
| <img src="previews/terreno/arvores_mata.jpg" width="120" alt="Forest (2×2 tile)"> | [`arvores_mata`](models/terreno/arvores_mata.glb) | Forest (2×2 tile) | 208 |
| <img src="previews/terreno/grama.jpg" width="120" alt="Grass (2×2 tile)"> | [`grama`](models/terreno/grama.glb) | Grass (2×2 tile) | 24 |
| <img src="previews/terreno/margem_canto.jpg" width="120" alt="Riverbank corner (2×2 tile)"> | [`margem_canto`](models/terreno/margem_canto.glb) | Riverbank corner (2×2 tile) | 320 |
| <img src="previews/terreno/margem_reta.jpg" width="120" alt="Straight riverbank (2×2 tile)"> | [`margem_reta`](models/terreno/margem_reta.glb) | Straight riverbank (2×2 tile) | 148 |
| <img src="previews/terreno/morro.jpg" width="120" alt="Hill (2×2 tile)"> | [`morro`](models/terreno/morro.glb) | Hill (2×2 tile) | 108 |
| <img src="previews/terreno/rampa.jpg" width="120" alt="Terrain ramp (2×2 tile)"> | [`rampa`](models/terreno/rampa.glb) | Terrain ramp (2×2 tile) | 56 |
| <img src="previews/terreno/terra.jpg" width="120" alt="Packed dirt (2×2 tile)"> | [`terra`](models/terreno/terra.glb) | Packed dirt (2×2 tile) | 144 |

### Vehicles · Veículos (10)

![Low poly vehicles 3D models](previews/veiculos.jpg)

| | Model | Description | Tris |
|---|---|---|---:|
| <img src="previews/veiculos/ambulancia.jpg" width="120" alt="Ambulance (van)"> | [`ambulancia`](models/veiculos/ambulancia.glb) | Ambulance (van) | 624 |
| <img src="previews/veiculos/bicicleta.jpg" width="120" alt="Bicycle"> | [`bicicleta`](models/veiculos/bicicleta.glb) | Bicycle | 332 |
| <img src="previews/veiculos/caminhao.jpg" width="120" alt="Box truck"> | [`caminhao`](models/veiculos/caminhao.glb) | Box truck | 676 |
| <img src="previews/veiculos/caminhao_bombeiros.jpg" width="120" alt="Fire truck"> | [`caminhao_bombeiros`](models/veiculos/caminhao_bombeiros.glb) | Fire truck | 1028 |
| <img src="previews/veiculos/caminhao_lixo.jpg" width="120" alt="Garbage truck (compactor)"> | [`caminhao_lixo`](models/veiculos/caminhao_lixo.glb) | Garbage truck (compactor) | 616 |
| <img src="previews/veiculos/caminhao_pipa.jpg" width="120" alt="Water tanker truck"> | [`caminhao_pipa`](models/veiculos/caminhao_pipa.glb) | Water tanker truck | 856 |
| <img src="previews/veiculos/carro.jpg" width="120" alt="Red hatchback car"> | [`carro`](models/veiculos/carro.glb) | Red hatchback car | 464 |
| <img src="previews/veiculos/carro_eletrico.jpg" width="120" alt="Electric car"> | [`carro_eletrico`](models/veiculos/carro_eletrico.glb) | Electric car | 488 |
| <img src="previews/veiculos/onibus.jpg" width="120" alt="City bus"> | [`onibus`](models/veiculos/onibus.glb) | City bus | 616 |
| <img src="previews/veiculos/taxi.jpg" width="120" alt="Taxi"> | [`taxi`](models/veiculos/taxi.glb) | Taxi | 520 |

### Street furniture · Mobiliário urbano (20)

![Low poly street furniture 3D models](previews/mobiliario.jpg)

| | Model | Description | Tris |
|---|---|---|---:|
| <img src="previews/mobiliario/banco_praca.jpg" width="120" alt="Park bench"> | [`banco_praca`](models/mobiliario/banco_praca.glb) | Park bench | 420 |
| <img src="previews/mobiliario/barril_chuva.jpg" width="120" alt="Rain barrel"> | [`barril_chuva`](models/mobiliario/barril_chuva.glb) | Rain barrel | 672 |
| <img src="previews/mobiliario/bebedouro.jpg" width="120" alt="Public drinking fountain"> | [`bebedouro`](models/mobiliario/bebedouro.glb) | Public drinking fountain | 472 |
| <img src="previews/mobiliario/bicicletario.jpg" width="120" alt="Bike rack"> | [`bicicletario`](models/mobiliario/bicicletario.glb) | Bike rack | 476 |
| <img src="previews/mobiliario/cerca_madeira.jpg" width="120" alt="Wooden fence (2-unit section along X)"> | [`cerca_madeira`](models/mobiliario/cerca_madeira.glb) | Wooden fence (2-unit section along X) | 348 |
| <img src="previews/mobiliario/cisterna.jpg" width="120" alt="Precast concrete rainwater cistern (semi-arid)"> | [`cisterna`](models/mobiliario/cisterna.glb) | Precast concrete rainwater cistern (semi-arid) | 600 |
| <img src="previews/mobiliario/hidrante.jpg" width="120" alt="Fire hydrant"> | [`hidrante`](models/mobiliario/hidrante.glb) | Fire hydrant | 422 |
| <img src="previews/mobiliario/lixeira.jpg" width="120" alt="Sidewalk trash bin"> | [`lixeira`](models/mobiliario/lixeira.glb) | Sidewalk trash bin | 284 |
| <img src="previews/mobiliario/lixeira_seletiva.jpg" width="120" alt="Recycling bins"> | [`lixeira_seletiva`](models/mobiliario/lixeira_seletiva.glb) | Recycling bins | 936 |
| <img src="previews/mobiliario/orelhao.jpg" width="120" alt="Brazilian public phone booth (orelhão)"> | [`orelhao`](models/mobiliario/orelhao.glb) | Brazilian public phone booth (orelhão) | 276 |
| <img src="previews/mobiliario/parquinho.jpg" width="120" alt="Playground"> | [`parquinho`](models/mobiliario/parquinho.glb) | Playground | 596 |
| <img src="previews/mobiliario/placa_educativa.jpg" width="120" alt="Riverside educational sign"> | [`placa_educativa`](models/mobiliario/placa_educativa.glb) | Riverside educational sign | 274 |
| <img src="previews/mobiliario/placa_pare.jpg" width="120" alt="Stop sign"> | [`placa_pare`](models/mobiliario/placa_pare.glb) | Stop sign | 136 |
| <img src="previews/mobiliario/ponto_onibus.jpg" width="120" alt="Bus stop with green roof"> | [`ponto_onibus`](models/mobiliario/ponto_onibus.glb) | Bus stop with green roof | 480 |
| <img src="previews/mobiliario/poste_luz.jpg" width="120" alt="Street light"> | [`poste_luz`](models/mobiliario/poste_luz.glb) | Street light | 236 |
| <img src="previews/mobiliario/poste_solar.jpg" width="120" alt="Solar street light"> | [`poste_solar`](models/mobiliario/poste_solar.glb) | Solar street light | 320 |
| <img src="previews/mobiliario/quiosque.jpg" width="120" alt="Park kiosk"> | [`quiosque`](models/mobiliario/quiosque.glb) | Park kiosk | 462 |
| <img src="previews/mobiliario/semaforo.jpg" width="120" alt="Traffic light"> | [`semaforo`](models/mobiliario/semaforo.glb) | Traffic light | 480 |
| <img src="previews/mobiliario/semaforo_pedestre.jpg" width="120" alt="Pedestrian traffic light"> | [`semaforo_pedestre`](models/mobiliario/semaforo_pedestre.glb) | Pedestrian traffic light | 212 |
| <img src="previews/mobiliario/vaso_planta.jpg" width="120" alt="Concrete sidewalk planter"> | [`vaso_planta`](models/mobiliario/vaso_planta.glb) | Concrete sidewalk planter | 328 |

### Vegetation · Vegetação (7)

![Low poly vegetation 3D models](previews/vegetacao.jpg)

| | Model | Description | Tris |
|---|---|---|---:|
| <img src="previews/vegetacao/araucaria.jpg" width="120" alt="Araucaria (Paraná pine)"> | [`araucaria`](models/vegetacao/araucaria.glb) | Araucaria (Paraná pine) | 548 |
| <img src="previews/vegetacao/arbustos.jpg" width="120" alt="Shrub cluster for flower beds"> | [`arbustos`](models/vegetacao/arbustos.glb) | Shrub cluster for flower beds | 200 |
| <img src="previews/vegetacao/buriti.jpg" width="120" alt="Buriti palm (moriche palm)"> | [`buriti`](models/vegetacao/buriti.glb) | Buriti palm (moriche palm) | 636 |
| <img src="previews/vegetacao/composteira.jpg" width="120" alt="Two-bay wooden slat compost bin"> | [`composteira`](models/vegetacao/composteira.glb) | Two-bay wooden slat compost bin | 1332 |
| <img src="previews/vegetacao/horta.jpg" width="120" alt="Community vegetable garden bed"> | [`horta`](models/vegetacao/horta.glb) | Community vegetable garden bed | 494 |
| <img src="previews/vegetacao/ipe_amarelo.jpg" width="120" alt="Yellow ipê (Brazilian trumpet tree)"> | [`ipe_amarelo`](models/vegetacao/ipe_amarelo.glb) | Yellow ipê (Brazilian trumpet tree) | 388 |
| <img src="previews/vegetacao/pedras.jpg" width="120" alt="Riverside rock cluster"> | [`pedras`](models/vegetacao/pedras.glb) | Riverside rock cluster | 108 |

### Riverside · Beira-rio (6)

![Low poly riverside 3D models](previews/beira_rio.jpg)

| | Model | Description | Tris |
|---|---|---|---:|
| <img src="previews/beira_rio/barco_pesca.jpg" width="120" alt="Small motor fishing boat on a patch of water"> | [`barco_pesca`](models/beira_rio/barco_pesca.glb) | Small motor fishing boat on a patch of water | 412 |
| <img src="previews/beira_rio/boia_rio.jpg" width="120" alt="River monitoring buoy"> | [`boia_rio`](models/beira_rio/boia_rio.glb) | River monitoring buoy | 364 |
| <img src="previews/beira_rio/canoa.jpg" width="120" alt="Wooden fishing canoe in a river backwater"> | [`canoa`](models/beira_rio/canoa.glb) | Wooden fishing canoe in a river backwater | 296 |
| <img src="previews/beira_rio/capivara.jpg" width="120" alt="Stylized capybara on a patch of riverbank grass"> | [`capivara`](models/beira_rio/capivara.glb) | Stylized capybara on a patch of riverbank grass | 300 |
| <img src="previews/beira_rio/garca.jpg" width="120" alt="Great egret standing on a riverside rock"> | [`garca`](models/beira_rio/garca.glb) | Great egret standing on a riverside rock | 222 |
| <img src="previews/beira_rio/trapiche.jpg" width="120" alt="Short wooden pier (jetty)"> | [`trapiche`](models/beira_rio/trapiche.glb) | Short wooden pier (jetty) | 570 |

<!-- catalogo:fim -->

## Build or modify the models

Every model is a short Python script in `src/<category>/<id>.py` that uses the building blocks in
[`src/lib.py`](src/lib.py) (boxes, cylinders, pipes, roofs, windows, trees…) and a single shared color palette.
Requires Blender 4.5 LTS.

```bash
blender -b --factory-startup --python src/agua/eta.py                 # one model → models/agua/eta.glb
blender -b --factory-startup --python src/gerar_todos.py              # all models (+ models/catalogo.json)
blender -b --factory-startup --python src/gerar_todos.py -- ruas      # a single category
blender -b --factory-startup --python src/vitrine.py -- tudo --cada   # preview images in previews/
blender -b --factory-startup --python src/cena_cidade.py              # previews/capa.jpg (sample neighborhood)
py -3 tools/atualizar_readme.py                                       # rebuilds the catalog in both READMEs
```

To create a new model: copy a similar script, build the piece with its **front facing Blender -Y** (`exportar`
rotates it 180° so the front ends up at -Z in glTF), use only colors from `PALETA`, and add its English name to
[`tools/nomes_en.json`](tools/nomes_en.json).

## FAQ

**Can I use these models in a commercial game?**
Yes. Everything is public domain (CC0 1.0): commercial use, modification and redistribution are allowed, with no
permission or payment needed.

**Do I need to give credit?**
No, attribution is optional. If you want to cite the kit, the data is in [CITATION.cff](CITATION.cff).

**What format are the models in?**
Binary glTF (`.glb`), Y up, front facing -Z, one PBR material per color (base color only, no textures or UVs).

**Do they work in Godot, Unity, Unreal and three.js?**
Yes. The `.glb` files open directly in Godot 4, three.js (`GLTFLoader`), Babylon.js, Blender and Unreal Engine 5
(Interchange). In Unity, use the glTFast package.

**What is the scale?**
1 lot = 2 × 2 units. Buildings take N × N lots, and road and terrain pieces are exactly 2 × 2 so they snap to a
grid.

**Are they light enough for mobile and the web?**
Yes. Each model has at most 1,500 triangles and 150 KB, with no textures. With materials converted to vertex
colors, a whole neighborhood fits in a handful of draw calls.

**Why are the file names in Portuguese?**
The kit was born from a Brazilian educational game. The English name of every file is in the catalog above and in
[`tools/nomes_en.json`](tools/nomes_en.json).

**Can I request or create a new model?**
Yes. Each model is a short Blender Python script (see [Build or modify](#build-or-modify-the-models)). To request
a model, open an issue.

## Origin and credits

The kit was born from the original models of the educational game
[Guardião da Água](https://github.com/kayquer/guardiao_da_agua_js) (*Water Guardian*), a product of Cláudia Dias
Roxinol's master's research (Unesp, Presidente Prudente, Brazil), developed with Kayque Rotondo. The models and
scripts were made with Blender, with Claude (Anthropic) as an assistant. No third-party models are included in
this repository.
