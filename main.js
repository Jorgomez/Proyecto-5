import { printHeaderTemplate } from './src/components/Header/Header'
import { main } from './src/components/MainElement/MainElement'
import { printFooterTemplate } from './src/components/footer/footer'

import { printTemplateMemoryGame } from './src/pages/MemoryGame/HeroMemoryGame/memoryGame'

import './style.css'

printHeaderTemplate()
document.body.append(main)

printTemplateMemoryGame()
printFooterTemplate()
