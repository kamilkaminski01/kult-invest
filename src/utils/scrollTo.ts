export const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    if (window.innerWidth <= 940) {
      const offset = 75
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
    } else {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
