var tribe_event_tickets_plus=tribe_event_tickets_plus||{};tribe_event_tickets_plus.meta=tribe_event_tickets_plus.meta||{},tribe_event_tickets_plus.meta.event=tribe_event_tickets_plus.meta.event||{},function(e,t,i,r){"use strict";r.selectors={field:{text:".tribe-tickets-meta-text",checkbox:".tribe-tickets-meta-checkbox",select:".tribe-tickets-meta-select",radio:".tribe-tickets-meta-radio",number:".ticket-meta-number-field"},quantity:"input.tribe-tickets-quantity",name:"input.tribe-tickets-full-name",email:"input.tribe-tickets-email",horizontal_datepicker:{container:".tribe_horizontal_datepicker__container",select:".tribe_horizontal_datepicker__container select",day:".tribe_horizontal_datepicker__day",month:".tribe_horizontal_datepicker__month",year:".tribe_horizontal_datepicker__year",value:".tribe_horizontal_datepicker__value"}},r.horizontal_datepicker={},r.init=function(){i(".tribe-list").on("click",".attendee-meta.toggle",function(){i(this).toggleClass("on").siblings(".attendee-meta-row").slideToggle()}),this.$ticket_form=i(".tribe-events-tickets").closest(".cart"),this.$ticket_form.on("change",".tribe-tickets-order_status-row select",this.event.status_changed).on("change",".quantity input, .quantity select",this.event.quantity_changed).on("keyup input",".quantity input",this.event.quantity_changed),this.$ticket_form.find('.quantity input:not([type="hidden"]), .quantity select').each(function(){r.set_quantity(i(this))}),i(".tribe-event-tickets-plus-meta-fields").on("keydown",".tribe-tickets-meta-number input",this.event.limit_number_field_typing),this.$rsvp_block=i(".tribe-block__rsvp"),this.$rsvp_block.on("change",".tribe-block__rsvp__number-input input",this.event.block_quantity_changed).on("keyup",".tribe-block__rsvp__number-input input",this.event.block_quantity_changed),this.horizontal_datepicker.populateSelects()},r.render_fields=function(e,t){var a=i(".tribe-event-tickets-plus-meta").filter('[data-ticket-id="'+e+'"]'),n=a.find(".tribe-event-tickets-plus-meta-fields-tpl"),s=a.find(".tribe-event-tickets-plus-meta-fields"),o=n.html();if(r.has_meta_fields(e)){var c=s.find(".tribe-event-tickets-plus-meta-attendee").length,l=0;if(c>t)return l=c-t,void s.find(".tribe-event-tickets-plus-meta-attendee:nth-last-child(-n+"+l+")").remove();l=t-c;for(var d=0;d<l;d++){var _=o;_=(_=o.replace(/tribe-tickets-meta\[\]/g,"tribe-tickets-meta["+e+"]["+(c+d)+"]")).replace(/tribe-tickets-meta_([a-z0-9-]+)_/g,"tribe-tickets-meta_$1_"+(c+d)+"_"),s.append(_)}}},r.set_quantity=function(e){if("yes"===e.closest("form").find(".tribe-tickets-order_status-row select").val()){var t=parseInt(e.val(),10),i=parseInt(e.closest("td").data("product-id"),10);r.render_fields(i,t)}},r.block_set_quantity=function(e,t){var i=t?parseInt(e.val(),10):0,a=parseInt(e.closest("form").data("product-id"),10);r.render_fields(a,i)},r.has_meta_fields=function(e){var r=i(t.getElementById("tribe-event-tickets-plus-meta-fields-tpl-"+e)).html();return!!i(r).find(".tribe-tickets-meta").length},r.validate_meta=function(e){var t=!0;return e.find(".tribe-tickets-meta-required").each(function(){var e=i(this),a="";null!==(a=e.is(r.selectors.field.radio)||e.is(r.selectors.field.checkbox)?e.find("input:checked").length?"checked":"":e.is(r.selectors.field.select)?e.find("select").val():e.is(r.selectors.horizontal_datepicker.day)||e.is(r.selectors.horizontal_datepicker.month)||e.is(r.selectors.horizontal_datepicker.year)?e.val():e.find("input, textarea").val().trim())&&0!==a.length||(t=!1)}),t},r.event.quantity_changed=function(){r.set_quantity(i(this))},r.event.status_changed=function(){var e=r.$ticket_form.find(".quantity"),t="yes"===i(this).val(),a=parseInt(e.data("product-id"),10),n=t?parseInt(e.find(".tribe-tickets-quantity").val(),10):0;r.render_fields(a,n)},r.event.block_quantity_changed=function(){var e=r.$rsvp_block.find(".tribe-block__rsvp__status .tribe-active").hasClass("tribe-block__rsvp__status-button--going");r.block_set_quantity(i(this),e)},r.event.limit_number_field_typing=function(e){-1!==i.inArray(e.keyCode,[46,8,9,27,13,110])||65===e.keyCode&&(!0===e.ctrlKey||!0===e.metaKey)||67===e.keyCode&&!0===e.ctrlKey||86===e.keyCode&&!0===e.ctrlKey||88===e.keyCode&&!0===e.ctrlKey||e.keyCode>=35&&e.keyCode<=40||(e.shiftKey||e.keyCode<48||e.keyCode>57)&&(e.keyCode<96||e.keyCode>105)&&e.preventDefault()},r.horizontal_datepicker.populateSelects=function(){i(r.selectors.horizontal_datepicker.container).each(function(e,t){const a=i(t),n=a.find(r.selectors.horizontal_datepicker.day),s=a.find(r.selectors.horizontal_datepicker.month),o=a.find(r.selectors.horizontal_datepicker.year),c=a.find(r.selectors.horizontal_datepicker.value).val().split("-");3===c.length&&(o.val(c[0]),s.val(c[1]),n.val(c[2]))})},r.horizontal_datepicker.populateHiddenValue=function(e){const t=i(e.target).closest(r.selectors.horizontal_datepicker.container),a=t.find(r.selectors.horizontal_datepicker.day),n=t.find(r.selectors.horizontal_datepicker.month),s=t.find(r.selectors.horizontal_datepicker.year),o=t.find(r.selectors.horizontal_datepicker.value);o.val(s.val()+"-"+n.val()+"-"+a.val()),o.trigger("change")},r.horizontal_datepicker.makeDayMonthYearRequired=function(e){const t=i(e.target),a=t.closest(r.selectors.horizontal_datepicker.container);let n=!(""===t.val()||"null-null-null"===t.val());a.find(r.selectors.horizontal_datepicker.day).prop("required",n),a.find(r.selectors.horizontal_datepicker.month).prop("required",n),a.find(r.selectors.horizontal_datepicker.year).prop("required",n),n?(a.find(r.selectors.horizontal_datepicker.day).addClass("tribe-tickets-meta-required"),a.find(r.selectors.horizontal_datepicker.month).addClass("tribe-tickets-meta-required"),a.find(r.selectors.horizontal_datepicker.year).addClass("tribe-tickets-meta-required")):(a.find(r.selectors.horizontal_datepicker.day).removeClass("tribe-tickets-meta-required"),a.find(r.selectors.horizontal_datepicker.month).removeClass("tribe-tickets-meta-required"),a.find(r.selectors.horizontal_datepicker.year).removeClass("tribe-tickets-meta-required"))},r.horizontal_datepicker.ensurePositiveNumber=function(e){const t=i(e.target),r=parseInt(t.val(),10),a=Math.abs(r);r!==a&&t.val(a)},r.addListeners=function(){i(t).on("change",r.selectors.horizontal_datepicker.select,this.horizontal_datepicker.populateHiddenValue),i(t).on("change",r.selectors.field.number,this.horizontal_datepicker.ensurePositiveNumber),i(t).on("change",r.selectors.horizontal_datepicker.value,this.horizontal_datepicker.makeDayMonthYearRequired),i(e).on("tribe_et_after_form_prefills",this.horizontal_datepicker.populateSelects)},i(function(){r.init(),r.addListeners()})}(window,document,jQuery,tribe_event_tickets_plus.meta);