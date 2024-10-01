import en from "./en.json";
import tw from "./zh-TW.json";

// 翻譯文件內沒有namespace
// const resources = {
//   en: {
//     translation: en,
//   },
//   tw: {
//     translation: tw,
//   }
// };

// 翻譯文件內有namespace
const resources = {
  en: {
    namespace1: en.namespace1,
    translation: en.translation
  },
  tw: {
    namespace1: tw.namespace1,
    translation: tw.translation
  }
};

export default resources;