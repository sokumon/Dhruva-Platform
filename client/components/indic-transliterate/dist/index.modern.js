import {jsx as $eSIqy$jsx, jsxs as $eSIqy$jsxs} from "react/jsx-runtime";
import {useState as $eSIqy$useState, useRef as $eSIqy$useRef, useMemo as $eSIqy$useMemo, useEffect as $eSIqy$useEffect} from "react";
import $eSIqy$textareacaret from "textarea-caret";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}



function $19eb910254214610$export$e27e3030245d4c9b() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}


function $2f5cf912a7dc4b84$export$8a4ff65f970d59a5(el) {
    const start = 0;
    const end = 0;
    if (!el) return {
        start: start,
        end: end
    };
    if (typeof el.selectionStart === "number" && typeof el.selectionEnd === "number") return {
        start: el.selectionStart,
        end: el.selectionEnd
    };
    return {
        start: start,
        end: end
    };
}
function $2f5cf912a7dc4b84$export$97ab23b40042f8af(elem, caretPos) {
    if (elem) {
        if (elem.selectionStart) {
            elem.focus();
            elem.setSelectionRange(caretPos, caretPos);
        } else elem.focus();
    }
}





var $f366c4b63b3a5b2d$exports = {};

$parcel$export($f366c4b63b3a5b2d$exports, "ReactTransliterate", () => $f366c4b63b3a5b2d$export$b7fa6c785ac95e64, (v) => $f366c4b63b3a5b2d$export$b7fa6c785ac95e64 = v);
$parcel$export($f366c4b63b3a5b2d$exports, "Active", () => $f366c4b63b3a5b2d$export$c3c7cbf43a3f0561, (v) => $f366c4b63b3a5b2d$export$c3c7cbf43a3f0561 = v);
var $f366c4b63b3a5b2d$export$b7fa6c785ac95e64;
var $f366c4b63b3a5b2d$export$c3c7cbf43a3f0561;
$f366c4b63b3a5b2d$export$b7fa6c785ac95e64 = "_ReactTransliterate_1b0d4b";
$f366c4b63b3a5b2d$export$c3c7cbf43a3f0561 = "_Active_1b0d4b";


const $5ac81081e5c28bfa$export$24b0ea3375909d37 = {
    KEY_RETURN: "Enter",
    KEY_ENTER: "Enter",
    KEY_TAB: "Tab",
    KEY_SPACE: " "
};


const $b9b628447857a10a$export$ca6dda5263526f75 = "https://xlit-api.ai4bharat.org/";


const $69c8f257da8dc8b1$export$27f30d10c00bcc6c = async (word, config)=>{
    const { showCurrentWordAsLastSuggestion: showCurrentWordAsLastSuggestion , lang: lang  } = config || {
        numOptions: 5,
        showCurrentWordAsLastSuggestion: true,
        lang: "hi"
    };
    // fetch suggestion from api
    // const url = `https://www.google.com/inputtools/request?ime=transliteration_en_${lang}&num=5&cp=0&cs=0&ie=utf-8&oe=utf-8&app=jsapi&text=${word}`;
    // let myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: "GET"
    };
    try {
        const res = await fetch($b9b628447857a10a$export$ca6dda5263526f75 + `tl/${lang}/${word === "." || word === ".." ? " " + word.replace(".", "%2E") : encodeURIComponent(word).replace(".", "%2E")}`, requestOptions);
        const data = await res.json();
        // console.log("library data", data);
        if (data && data.result.length > 0) {
            const found = showCurrentWordAsLastSuggestion ? [
                ...data.result,
                word
            ] : data.result;
            return found;
        } else {
            if (showCurrentWordAsLastSuggestion) return [
                word
            ];
            return [];
        }
    } catch (e) {
        // catch error
        console.error("There was an error with transliteration", e);
        return [];
    }
};



const $d8161b358c525845$export$58f2e270169de9d3 = async ()=>{
    if (sessionStorage.getItem("indic_transliterate__supported_languages")) return JSON.parse(sessionStorage.getItem("indic_transliterate__supported_languages") || "");
    else {
        const apiURL = `${$b9b628447857a10a$export$ca6dda5263526f75}languages`;
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
            method: "GET"
        };
        try {
            const res = await fetch(apiURL, requestOptions);
            const data = await res.json();
            sessionStorage.setItem("indic_transliterate__supported_languages", JSON.stringify(data));
            return data;
        } catch (e) {
            console.error("There was an error with transliteration", e);
            return [];
        }
    }
};


const $41d49c8a6078fe3c$var$KEY_UP = "ArrowUp";
const $41d49c8a6078fe3c$var$KEY_DOWN = "ArrowDown";
const $41d49c8a6078fe3c$var$KEY_ESCAPE = "Escape";
const $41d49c8a6078fe3c$var$OPTION_LIST_Y_OFFSET = 10;
const $41d49c8a6078fe3c$var$OPTION_LIST_MIN_WIDTH = 100;
const $41d49c8a6078fe3c$export$a62758b764e9e41d = ({ renderComponent: renderComponent = (props)=>/*#__PURE__*/ $eSIqy$jsx("input", {
        ...props
    })
 , lang: lang = "hi" , offsetX: offsetX = 0 , offsetY: offsetY = 10 , onChange: onChange , onChangeText: onChangeText , onBlur: onBlur , value: value , onKeyDown: onKeyDown , containerClassName: containerClassName = "" , containerStyles: containerStyles = {
} , activeItemStyles: activeItemStyles = {
} , maxOptions: maxOptions = 5 , hideSuggestionBoxOnMobileDevices: hideSuggestionBoxOnMobileDevices = false , hideSuggestionBoxBreakpoint: hideSuggestionBoxBreakpoint = 450 , triggerKeys: triggerKeys = [
    $5ac81081e5c28bfa$export$24b0ea3375909d37.KEY_SPACE,
    $5ac81081e5c28bfa$export$24b0ea3375909d37.KEY_ENTER,
    $5ac81081e5c28bfa$export$24b0ea3375909d37.KEY_RETURN,
    $5ac81081e5c28bfa$export$24b0ea3375909d37.KEY_TAB, 
] , insertCurrentSelectionOnBlur: insertCurrentSelectionOnBlur = true , showCurrentWordAsLastSuggestion: showCurrentWordAsLastSuggestion = true , enabled: enabled = true , ...rest })=>{
    const [options, setOptions] = $eSIqy$useState([]);
    const [left, setLeft] = $eSIqy$useState(0);
    const [top, setTop] = $eSIqy$useState(0);
    const [selection, setSelection] = $eSIqy$useState(0);
    const [matchStart, setMatchStart] = $eSIqy$useState(-1);
    const [matchEnd, setMatchEnd] = $eSIqy$useState(-1);
    const inputRef = $eSIqy$useRef(null);
    const [windowSize, setWindowSize] = $eSIqy$useState({
        width: 0,
        height: 0
    });
    const [direction, setDirection] = $eSIqy$useState("ltr");
    const [googleFont, setGoogleFont] = $eSIqy$useState(null);
    const shouldRenderSuggestions = $eSIqy$useMemo(()=>hideSuggestionBoxOnMobileDevices ? windowSize.width > hideSuggestionBoxBreakpoint : true
    , [
        windowSize,
        hideSuggestionBoxBreakpoint,
        hideSuggestionBoxOnMobileDevices
    ]);
    const reset = ()=>{
        // reset the component
        setSelection(0);
        setOptions([]);
    };
    const handleSelection = (index, triggerKey = " ")=>{
        var ref;
        const currentString = value;
        // create a new string with the currently typed word
        // replaced with the word in transliterated language
        const newValue = currentString.substring(0, matchStart) + options[index] + " " + currentString.substring(matchEnd + 1, currentString.length);
        // set the position of the caret (cursor) one character after the
        // the position of the new word
        setTimeout(()=>{
            $2f5cf912a7dc4b84$export$97ab23b40042f8af(// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            inputRef.current, triggerKey === "Enter" ? matchStart + options[index].length : matchStart + options[index].length + 1);
        }, 1);
        // bubble up event to the parent component
        const e = {
            target: {
                value: newValue
            }
        };
        onChangeText(newValue);
        onChange && onChange(e);
        reset();
        return (ref = inputRef.current) === null || ref === void 0 ? void 0 : ref.focus();
    };
    const renderSuggestions = async (lastWord)=>{
        if (!shouldRenderSuggestions) return;
        // fetch suggestion from api
        // const url = `https://www.google.com/inputtools/request?ime=transliteration_en_${lang}&num=5&cp=0&cs=0&ie=utf-8&oe=utf-8&app=jsapi&text=${lastWord}`;
        const numOptions = showCurrentWordAsLastSuggestion ? maxOptions - 1 : maxOptions;
        const data = await $69c8f257da8dc8b1$export$27f30d10c00bcc6c(lastWord, {
            numOptions: numOptions,
            showCurrentWordAsLastSuggestion: showCurrentWordAsLastSuggestion,
            lang: lang
        });
        setOptions(data !== null && data !== void 0 ? data : []);
    };
    const getDirectionAndFont = async (lang)=>{
        const langList = await $d8161b358c525845$export$58f2e270169de9d3();
        const langObj = langList === null || langList === void 0 ? void 0 : langList.find((l)=>l.LangCode === lang
        );
        var ref;
        return [
            (ref = langObj === null || langObj === void 0 ? void 0 : langObj.Direction) !== null && ref !== void 0 ? ref : "ltr",
            langObj === null || langObj === void 0 ? void 0 : langObj.GoogleFont,
            langObj === null || langObj === void 0 ? void 0 : langObj.FallbackFont, 
        ];
    };
    const handleChange = (e)=>{
        const value = e.currentTarget.value;
        // bubble up event to the parent component
        onChange && onChange(e);
        onChangeText(value);
        if (!shouldRenderSuggestions) return;
        // get the current index of the cursor
        const caret = $2f5cf912a7dc4b84$export$8a4ff65f970d59a5(e.target).end;
        const input = inputRef.current;
        if (!input) return;
        const caretPos = $eSIqy$textareacaret(input, caret);
        // search for the last occurence of the space character from
        // the cursor
        const indexOfLastSpace = value.lastIndexOf(" ", caret - 1) < value.lastIndexOf("\n", caret - 1) ? value.lastIndexOf("\n", caret - 1) : value.lastIndexOf(" ", caret - 1);
        // first character of the currently being typed word is
        // one character after the space character
        // index of last character is one before the current position
        // of the caret
        setMatchStart(indexOfLastSpace + 1);
        setMatchEnd(caret - 1);
        // currentWord is the word that is being typed
        const currentWord = value.slice(indexOfLastSpace + 1, caret);
        if (currentWord && enabled) {
            // make an api call to fetch suggestions
            renderSuggestions(currentWord);
            const rect = input.getBoundingClientRect();
            // calculate new left and top of the suggestion list
            // minimum of the caret position in the text input and the
            // width of the text input
            const left = Math.min(caretPos.left, rect.width - $41d49c8a6078fe3c$var$OPTION_LIST_MIN_WIDTH / 2);
            // minimum of the caret position from the top of the input
            // and the height of the input
            const top = Math.min(caretPos.top + $41d49c8a6078fe3c$var$OPTION_LIST_Y_OFFSET, rect.height);
            setTop(top);
            setLeft(left);
        } else reset();
    };
    const handleKeyDown = (event)=>{
        const helperVisible = options.length > 0;
        if (helperVisible) {
            if (triggerKeys.includes(event.key)) {
                event.preventDefault();
                handleSelection(selection, event.key);
            } else switch(event.key){
                case $41d49c8a6078fe3c$var$KEY_ESCAPE:
                    event.preventDefault();
                    reset();
                    break;
                case $41d49c8a6078fe3c$var$KEY_UP:
                    event.preventDefault();
                    setSelection((options.length + selection - 1) % options.length);
                    break;
                case $41d49c8a6078fe3c$var$KEY_DOWN:
                    event.preventDefault();
                    setSelection((selection + 1) % options.length);
                    break;
                default:
                    onKeyDown && onKeyDown(event);
                    break;
            }
        } else onKeyDown && onKeyDown(event);
    };
    const handleBlur = (event)=>{
        if (!$19eb910254214610$export$e27e3030245d4c9b()) {
            if (insertCurrentSelectionOnBlur && options[selection]) handleSelection(selection);
            else reset();
        }
        onBlur && onBlur(event);
    };
    const handleResize = ()=>{
        // TODO implement the resize function to resize
        // the helper on screen size change
        const width = window.innerWidth;
        const height = window.innerHeight;
        setWindowSize({
            width: width,
            height: height
        });
    };
    $eSIqy$useEffect(()=>{
        window.addEventListener("resize", handleResize);
        const width = window.innerWidth;
        const height = window.innerHeight;
        setWindowSize({
            width: width,
            height: height
        });
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    $eSIqy$useEffect(()=>{
        getDirectionAndFont(lang).then(([direction, googleFont, fallbackFont])=>{
            setDirection(direction);
            // import google font if not already imported
            if (googleFont) {
                if (!document.getElementById(`font-${googleFont}`)) {
                    const link = document.createElement("link");
                    link.id = `font-${googleFont}`;
                    link.href = `https://fonts.googleapis.com/css?family=${googleFont}`;
                    link.rel = "stylesheet";
                    document.head.appendChild(link);
                }
                setGoogleFont(`${googleFont}, ${fallbackFont !== null && fallbackFont !== void 0 ? fallbackFont : "sans-serif"}`);
            } else setGoogleFont(null);
        });
    }, [
        lang
    ]);
    return(/*#__PURE__*/ $eSIqy$jsxs("div", {
        // position relative is required to show the component
        // in the correct position
        style: {
            ...containerStyles,
            position: "relative"
        },
        className: containerClassName,
        children: [
            renderComponent({
                onChange: handleChange,
                onKeyDown: handleKeyDown,
                onBlur: handleBlur,
                ref: inputRef,
                value: value,
                "data-testid": "rt-input-component",
                lang: lang,
                style: {
                    direction: direction,
                    ...googleFont && {
                        fontFamily: googleFont
                    }
                },
                ...rest
            }),
            shouldRenderSuggestions && options.length > 0 && /*#__PURE__*/ $eSIqy$jsx("ul", {
                style: {
                    left: `${left + offsetX}px`,
                    top: `${top + offsetY}px`,
                    position: "absolute",
                    width: "auto",
                    ...googleFont && {
                        fontFamily: googleFont
                    }
                },
                className: (/*@__PURE__*/$parcel$interopDefault($f366c4b63b3a5b2d$exports)).ReactTransliterate,
                "data-testid": "rt-suggestions-list",
                lang: lang,
                children: Array.from(new Set(options)).map((item, index)=>/*#__PURE__*/ $eSIqy$jsx("li", {
                        className: index === selection ? (/*@__PURE__*/$parcel$interopDefault($f366c4b63b3a5b2d$exports)).Active : undefined,
                        style: index === selection ? activeItemStyles || {
                        } : {
                        },
                        onMouseEnter: ()=>{
                            setSelection(index);
                        },
                        onClick: ()=>handleSelection(index)
                        ,
                        children: item
                    }, item)
                )
            })
        ]
    }));
};


export {$41d49c8a6078fe3c$export$a62758b764e9e41d as IndicTransliterate, $5ac81081e5c28bfa$export$24b0ea3375909d37 as TriggerKeys, $69c8f257da8dc8b1$export$27f30d10c00bcc6c as getTransliterateSuggestions, $d8161b358c525845$export$58f2e270169de9d3 as getTransliterationLanguages};
//# sourceMappingURL=index.modern.js.map
