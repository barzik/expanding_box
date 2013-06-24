/* ============================================================
 * expanding_box.js v1.0
 * ============================================================
 *
 * Information: This plugin create +\- sign that expand or collapse certain blocks
 * Usage:
 *  $('#some-block h2', context).expanding_box();
 *      - Will make the h2 element clickable and collapse all content below it;
 *
 *  Options
 *  =======
 *  more
 *  $('#some-block h2', context).expanding_box({'more' : false});
 *      - if set to false, the h2 will be clickable, but the content will not be initially collapsed.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */

;(function ( $, window, document, undefined ) {

    //default and plugin name
    var pluginName = "expanding_box",
        defaults = {
            'more' : true //we want to start at read more = true, want to start at read less = false
        };

    // plugin constructor
    function Plugin( element, options ) {
        this.element = $(element);
        this.options = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    //all the Plugin methods. private are _privateMethods
    Plugin.prototype = {
        init: function() {

            this.element_to_hide = $(this.element).nextAll();
            this.element.addClass('expanding_buttons');

            if (this.options.more === true) {
                this.element.addClass('more');
                this.element_to_hide.css({'overflow' :'hidden', 'display' : 'none'});
            } else {
                this.element.addClass('less');
                this.element_to_hide.css({'overflow' :'hidden'});
            }


            var _this = this;
            this.element.on("click", function() { _this._activate_expanding_box_button($(this));});


        },
        _activate_expanding_box_button: function(el) {
            if (el.hasClass('more')) {
                el.removeClass('more');
                el.addClass('less');
                this.element_to_hide.animate({'height': 'toggle'});

            } else {
                el.addClass('more');
                el.removeClass('less');
                this.element_to_hide.animate({'height': 'toggle'});
            }
        }
    };

    //Simple wrapper, no double instances here!

    $.fn[pluginName] = function ( options ) {
        var args = arguments;
        if (options === undefined || typeof options === 'object') {
            return this.each(function () {
                if (!$.data(this, 'plugin_' + pluginName)) {
                    $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            return this.each(function () {
                var instance = $.data(this, 'plugin_' + pluginName);
                if (instance instanceof Plugin && typeof instance[options] === 'function') {
                    instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
                }
            });
        }
    }

})( jQuery, window, document );