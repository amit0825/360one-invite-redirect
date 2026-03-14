const DEEP_LINK = "360-one-wealth-the-reserve://invite";

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.one360.wealth";

const APP_STORE =
  "https://apps.apple.com/in/app/360-one-wealth-the-reserve/id6751482235";

function getMobileOS() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    return "android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return "ios";
  }

  return "other";
}

function openApp() {
  const os = getMobileOS();
  const start = Date.now();

  window.location.href = DEEP_LINK;

  setTimeout(function () {
    const end = Date.now();

    if (end - start < 2500) {
      if (os === "android") {
        window.location.href = PLAY_STORE;
      }

      if (os === "ios") {
        window.location.href = APP_STORE;
      }
    }
  }, 2000);
}

window.onload = () => {
  setTimeout(openApp, 500);
};
