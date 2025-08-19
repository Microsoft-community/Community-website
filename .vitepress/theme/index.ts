// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import Theme from "vitepress/theme";
import { onMounted, watch, nextTick } from "vue";
import { useRoute } from "vitepress";
import mediumZoom from "medium-zoom";
import Lounge from "../../src/components/Lounge.vue";
import "./style.css";

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component("Lounge", Lounge);
  },

  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom(".main img", { background: "var(--vp-c-bg)" });
    };

    // higlights anchors (used in src/member/index.md)
    const highlightAnchor = () => {
      // removes the hilight-anchor class from all elements
      document
        .querySelectorAll(".highlight-anchor")
        .forEach((el) => el.classList.remove("highlight-anchor"));

      // grab the hash/anchor string from the url
      const hash = window.location.hash;

      // check if the url is in fact an anchor otherwise do nothing
      if (hash) {
        // select the HTML element that the anchor ties to
        const el = document.querySelector(hash);

        // if there is an element
        if (el) {
          // add to the element the class "hilight-anchor"
          el.classList.add("highlight-anchor");

          // adds an event listener that removes the hilight class once the animation ends
          el.addEventListener(
            "animationend",
            () => {
              // removes the hilight-anchor class
              el.classList.remove("highlight-anchor");
            },
            /* once: true will automatically clean up the listener */ {
              once: true,
            },
          );

          // the class is configured in style.css to hilight the element
        }
      }
    };
    onMounted(() => {
      initZoom();
      highlightAnchor();
      // add an eventlistener that calls the hilightAnchor function if the anchor is changed
      window.addEventListener("hashchange", highlightAnchor);
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom()),
    );
  },
};
