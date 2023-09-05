export default interface Props {
    width? : string | number
    options : {value : string | number, label : string}[]
    defaultValue? : string | number
    disabled?: boolean
}