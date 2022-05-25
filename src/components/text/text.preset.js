import { colors } from "../../themes/colors"
import { typography } from "../../themes/typography"

const BASE = {
    fontFamily:typography.primary,
    fontSize:14,
    color: 'white',
    lineHeight: 22
   
}

const BOLD ={
    fontFamily:typography.bold,
    color: colors.white
}

export const presets = {
    default:BASE,
    bold:BOLD,
    h1:{
        ...BOLD,
        fontSize:24,
        color: colors.textColor

    },
    h2:{
        ...BOLD,
        fontSize:20,
        color: colors.textColor
    },
    h3:{
        ...BASE,
        fontSize:14,
        color:'#0D1333',
        marginTop: 15,
        lineHeight: 18
        
    },
    small:{
        ...BASE,
        fontSize:12
    }
}