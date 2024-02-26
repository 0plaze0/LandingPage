import { image } from "./index";
import { CiTrophy } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoDiamondOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const RecommendCourseDetails = [
  {
    id: 1,
    image: image.course,
    tags: ["20%", "Limited Time"],
    title: "Webbuilder",
    desc: "Compter Modern clasic with wix support",
    cost: 39.96,
    cutCost: 49.96,
    discount: 20,
  },
  {
    id: 2,
    image: image.course,
    tags: ["20%", "Limited Time"],
    title: "Webbuilder",
    desc: "Compter Modern clasic with wix support",
    cost: 39.96,
    cutCost: 49.96,
    discount: 20,
  },
  {
    id: 3,
    image: image.course,
    tags: ["20%", "Limited Time"],
    title: "Webbuilder",
    desc: "Compter Modern clasic with wix support",
    cost: 39.96,
    cutCost: 49.96,
    discount: 20,
  },
];

const courseDetails = [
  {
    id: 1,
    tag: {
      text: "Best Choice",
      icon: <CiTrophy />,
    },
    image: image.course,
    title: "WixPro 72-Inch Responsive Website Builder",
    desc: "Compreshensive Digital PlateForm Creation Tool, Streamlined DesignInterface for Professional Websites and Online Stores (Black/Blue)",
    mainHighlights:
      "[What you Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library og widgets and apps, and detailed setp-by-step guides.",
    rating: 9.8,
    ratingText: "Expectional",
  },
  {
    id: 2,
    tag: {
      text: "Best Value",
      icon: <IoDiamondOutline />,
    },
    image: image.course,
    title: "WixPro 72-Inch Responsive Website Builder",
    desc: "Compreshensive Digital PlateForm Creation Tool, Streamlined DesignInterface for Professional Websites and Online Stores (Black/Blue)",
    mainHighlights:
      "[What you Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library og widgets and apps, and detailed setp-by-step guides.",
    rating: 9.8,
    ratingText: "Expectional",
  },
  {
    id: 3,

    image: image.course,
    title: "WixPro 72-Inch Responsive Website Builder",
    desc: "Compreshensive Digital PlateForm Creation Tool, Streamlined DesignInterface for Professional Websites and Online Stores (Black/Blue)",
    mainHighlights:
      "[What you Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library og widgets and apps, and detailed setp-by-step guides.",
    rating: 9.8,
    ratingText: "Expectional",
  },
];

const footerLinks = [
  {
    id: 1,
    title: "Categories",
    links: [
      { name: "Web Builder", link: "Web Builder" },
      { name: "Hosting", link: "Hosting" },
      { name: "Data Center", link: "Data Center" },
      { name: "Robotic-Automation", link: "Robotic-Automation" },
    ],
  },
  {
    id: 2,
    title: "Contacts",
    links: [
      { name: "Contact", link: "Contact" },
      { name: "Privacy Policy", link: "Privacy Policy" },
      { name: "Terms of Service", link: "Terms of Service" },
      { name: "Categories", link: "Categories" },
      { name: "About", link: "About" },
    ],
  },
];
export default { RecommendCourseDetails, courseDetails, footerLinks };
