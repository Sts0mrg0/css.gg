"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledGlobe = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:10px;border:2px solid;border-radius:100px;margin-left:-3px;margin-top:-7px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{top:11px;border-right:2px solid transparent;box-shadow:0 2px 0,inset -2px 0 0;left:1px;width:6px;height:2px}&::after{width:16px;height:10px;border-radius:50px;border-top-left-radius:0;border-top-right-radius:0;border:2px solid;border-top-color:transparent;right:-7px;bottom:-5px;transform:rotate(-35deg)}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:10px;border:2px solid;border-radius:100px;margin-left:-3px;margin-top:-7px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{top:11px;border-right:2px solid transparent;box-shadow:0 2px 0,inset -2px 0 0;left:1px;width:6px;height:2px}&::after{width:16px;height:10px;border-radius:50px;border-top-left-radius:0;border-top-right-radius:0;border:2px solid;border-top-color:transparent;right:-7px;bottom:-5px;transform:rotate(-35deg)}\n"])));
exports.Globe = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledGlobe, tslib_1.__assign({}, props, { ref: ref, "icon-role": "globe" }))));
});
var templateObject_1;
//# sourceMappingURL=Globe.js.map