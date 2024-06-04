interface IconsProps {
  className?: string;
  width?: string;
  height?: string;
  fill?: string;
}

export const ArrowDownIcon = ({
  className,
  width = "18",
  height = "23",
  fill = "currentColor",
}: IconsProps) => (
  <svg
    viewBox="0 0 18 23"
    className={className}
    width={width}
    height={height}
    fill={fill}
  >
    <g clipPath="url(#clip0_3370_1709)">
      <path
        d="M8.88281 0C8.27344 0 7.83984 0.421875 7.83984 1.03125V16.4648L7.95703 19.957L8.61328 19.7227L4.41797 15.1172L1.74609 12.4922C1.57031 12.3047 1.28906 12.2109 1.00781 12.2109C0.421875 12.2109 0 12.6562 0 13.2305C0 13.5117 0.105469 13.7578 0.328125 13.9922L8.09766 21.7852C8.32031 22.0195 8.58984 22.1367 8.88281 22.1367C9.17578 22.1367 9.44531 22.0195 9.66797 21.7852L17.4492 13.9922C17.6719 13.7578 17.7656 13.5117 17.7656 13.2305C17.7656 12.6562 17.3438 12.2109 16.7578 12.2109C16.4766 12.2109 16.207 12.3047 16.0195 12.4922L13.3477 15.1172L9.14062 19.7227L9.80859 19.957L9.92578 16.4648V1.03125C9.92578 0.421875 9.49219 0 8.88281 0Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_3370_1709">
        <rect width="17.7656" height="22.1367" fill={fill} />
      </clipPath>
    </defs>
  </svg>
);

export const ArrowUpRightIcon = ({
  className,
  width = "18",
  height = "18",
  fill = "currentColor",
}: IconsProps) => (
  <svg
    viewBox="0 0 18 18"
    className={className}
    width={width}
    height={height}
    fill={fill}
  >
    <g clipPath="url(#clip0_32_898)">
      <path
        d="M17.3086 12.9609L17.2969 1.17188C17.2969 0.503906 16.8633 0.0351562 16.1602 0.0351562H4.37109C3.71484 0.0351562 3.26953 0.539062 3.26953 1.10156C3.26953 1.66406 3.77344 2.14453 4.32422 2.14453H8.40234L14.1211 1.95703L11.9414 3.86719L0.328125 15.5039C0.117188 15.7148 0 15.9844 0 16.2422C0 16.8047 0.503906 17.332 1.08984 17.332C1.35938 17.332 1.61719 17.2383 1.82812 17.0156L13.4648 5.39062L15.3984 3.19922L15.1875 8.67188V13.0078C15.1875 13.5586 15.668 14.0742 16.2422 14.0742C16.8047 14.0742 17.3086 13.5938 17.3086 12.9609Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_32_898">
        <rect width="17.3086" height="17.332" fill={fill} />
      </clipPath>
    </defs>
  </svg>
);

export const ChevronUp = ({
  className,
  width = "21",
  height = "13",
  fill = "currentColor",
}: IconsProps) => (
  <svg
    viewBox="0 0 21 13"
    className={className}
    width={width}
    height={height}
    fill={fill}
  >
    <g clipPath="url(#clip0_44_906)">
      <path
        d="M0.316406 9.63281C0.117188 9.82031 0 10.0898 0 10.3945C0 11.0039 0.457031 11.4609 1.06641 11.4609C1.37109 11.4609 1.65234 11.3555 1.82812 11.1562L10.8047 1.99219H9.55078L18.5273 11.1562C18.7148 11.3555 18.9961 11.4609 19.2891 11.4609C19.8984 11.4609 20.3555 11.0039 20.3555 10.3945C20.3555 10.0898 20.2383 9.82031 20.0391 9.63281L10.9688 0.351562C10.7695 0.128906 10.4766 0 10.1836 0C9.87891 0 9.59766 0.128906 9.38672 0.351562L0.316406 9.63281Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_44_906">
        <rect width="20.3555" height="12.4102" fill={fill} />
      </clipPath>
    </defs>
  </svg>
);

export const CloseIcon = ({
  className,
  width = "25",
  height = "25",
  fill = "currentColor",
}: IconsProps) => (
  <svg
    viewBox="0 0 25 25"
    className={className}
    width={width}
    height={height}
    fill={fill}
  >
    <g clipPath="url(#clip0_55_934)">
      <path
        d="M12.105 24.21C18.7369 24.21 24.2121 18.7273 24.2121 12.105C24.2121 5.47312 18.7273 0 12.0954 0C5.47523 0 0 5.47312 0 12.105C0 18.7273 5.48484 24.21 12.105 24.21Z"
        fill="white"
      />
      <path
        d="M8.25804 17.0648C7.64094 17.0648 7.16211 16.5743 7.16211 15.9551C7.16211 15.6677 7.27274 15.3879 7.48555 15.1868L10.5418 12.1167L7.48555 9.05835C7.27274 8.84764 7.16211 8.57741 7.16211 8.28796C7.16211 7.65913 7.64094 7.18992 8.25804 7.18992C8.57398 7.18992 8.82077 7.29632 9.0357 7.50163L12.1048 10.5612L15.1974 7.49202C15.4219 7.26749 15.6687 7.1707 15.975 7.1707C16.5921 7.1707 17.0806 7.64952 17.0806 8.26874C17.0806 8.56569 16.9817 8.81671 16.7475 9.04874L13.6838 12.1167L16.7379 15.1772C16.9603 15.3783 17.071 15.6581 17.071 15.9551C17.071 16.5743 16.5825 17.0648 15.9558 17.0648C15.6399 17.0648 15.3643 16.9584 15.1568 16.7414L12.1048 13.6861L9.06663 16.7414C8.8496 16.9584 8.57398 17.0648 8.25804 17.0648Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_55_934">
        <rect width="24.2121" height="24.2175" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const ExpandIconSimple = ({
  className,
  width = "49",
  height = "48",
  fill = "currentColor",
}: IconsProps) => (
  <svg
    viewBox="0 0 49 48"
    className={className}
    width={width}
    height={height}
    fill={fill}
  >
    <g clipPath="url(#clip0_60_50)">
      <path
        d="M21.3355 45.721C21.3355 44.3862 20.3282 43.4292 18.9934 43.4292H16.878L8.0889 43.9329L15.0648 37.3096L22.8717 29.553C23.3249 29.1249 23.5265 28.5709 23.5265 27.9665C23.5265 26.531 22.5947 25.4733 21.1844 25.4733C20.5044 25.4733 19.9 25.7 19.4467 26.1532L11.6902 33.935L5.06686 40.9109L5.57052 32.0966V30.0063C5.57052 28.6716 4.63874 27.6391 3.2788 27.6391C1.91889 27.6391 0.961914 28.6464 0.961914 30.0063L0.961914 43.9833C0.961914 46.552 2.44775 48.0378 5.01649 48.0378H18.9934C20.303 48.0378 21.3355 47.0557 21.3355 45.721ZM49.0124 18.0944V4.11751C49.0124 1.54881 47.5266 0.0378412 44.9579 0.0378412H30.981C29.6714 0.0378412 28.6388 1.01994 28.6388 2.37983C28.6388 3.68943 29.6462 4.67153 30.981 4.67153H33.0962L41.8854 4.14266L34.9096 10.7913L27.1026 18.5225C26.6492 18.9506 26.4478 19.53 26.4478 20.1343C26.4478 21.5447 27.3797 22.6276 28.7898 22.6276C29.4698 22.6276 30.0743 22.3757 30.5275 21.9225L38.2841 14.1658L44.9074 7.1648L44.4037 15.979V18.0944C44.4037 19.4292 45.3355 20.4618 46.6954 20.4618C48.0555 20.4618 49.0124 19.4292 49.0124 18.0944Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_60_50">
        <rect
          width="48"
          height="49"
          fill={fill}
          transform="matrix(0 -1 1 0 0.961914 48.0378)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const FourCirlesIcon = ({
  className,
  width = "28",
  height = "28",
  fill = "currentColor",
}: IconsProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_96_12)">
      <path
        d="M13.5589 27.6943C16.3451 27.6943 18.6501 25.3821 18.6501 22.5922C18.6501 19.8104 16.3451 17.4982 13.5589 17.4982C10.7464 17.4982 8.45312 19.8104 8.45312 22.5922C8.45312 25.3821 10.7464 27.6943 13.5589 27.6943Z"
        fill={fill}
      />
      <path
        d="M22.0435 18.9452C24.8217 18.9452 27.1266 16.633 27.1266 13.8431C27.1266 11.0613 24.8217 8.7491 22.0435 8.7491C19.2229 8.7491 16.9297 11.0613 16.9297 13.8431C16.9297 16.633 19.2229 18.9452 22.0435 18.9452Z"
        fill={fill}
      />
      <path
        d="M5.10574 18.9452C7.89199 18.9452 10.197 16.633 10.197 13.8431C10.197 11.0613 7.89199 8.7491 5.10574 8.7491C2.28516 8.7491 0 11.0613 0 13.8431C0 16.633 2.28516 18.9452 5.10574 18.9452Z"
        fill={fill}
      />
      <path
        d="M13.5589 10.1925C16.3451 10.1925 18.6501 7.88027 18.6501 5.09402C18.6501 2.30414 16.3451 0 13.5589 0C10.7464 0 8.45312 2.30414 8.45312 5.09402C8.45312 7.88027 10.7464 10.1925 13.5589 10.1925Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_96_12">
        <rect width="27.1262" height="27.7141" fill={fill} />
      </clipPath>
    </defs>
  </svg>
);
