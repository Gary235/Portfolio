import python from '../assets/icons/python-icon.svg'
import c from '../assets/icons/c-icon.svg'
import django from '../assets/icons/django-icon.svg'
import react from '../assets/icons/react-icon.svg'
import javascript from '../assets/icons/js-icon.svg'
import typescript from '../assets/icons/ts-icon.svg'
import css from '../assets/icons/css-icon.svg'
import netlify from '../assets/icons/netlify-icon.svg'
import html from '../assets/icons/html-icon.svg'
import shell from '../assets/icons/shell-icon.svg'
import mantine from '../assets/icons/mantine-icon.svg'
import git from '../assets/icons/git-icon.svg'
import flocabulary from '../assets/icons/flocabulary-icon.svg'
import unipyme from '../assets/icons/unipyme-icon.svg'
import codilink from '../assets/icons/codilink-icon.svg'

const getTechIcon = tech => {
  return {
    c,
    codilink,
    css,
    django,
    flocabulary,
    git,
    html,
    javascript,
    mantine,
    netlify,
    python,
    react,
    shell,
    typescript,
    unipyme,
  }[tech] ?? '';
}

export default getTechIcon
