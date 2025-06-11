export type HeaderProps = {
    title: string    
}

export type SubHeaderProps = {
    title: string    
}

export type ParagraphProps = {
    description: string,
    isBullet?: boolean
}

export type ButtonProps = {
    title: string,
    isFullWidth: boolean,
    route?: string,
    onClick?: () => void
}
