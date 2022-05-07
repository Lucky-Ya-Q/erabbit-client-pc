import XtxSkeleton from '@/components/library/xtx-skeleton'
import XtxCarousel from '@/components/library/xtx-carousel'

export default {
  install (app) {
    app.component('XtxSkeleton', XtxSkeleton)
    app.component('XtxCarousel', XtxCarousel)
  }
}
