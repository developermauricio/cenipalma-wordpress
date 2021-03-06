<?php
namespace PixelYourSite;


class EventsWoo extends EventsFactory {

    private $events = array(
        "woo_frequent_shopper",
        "woo_vip_client",
        "woo_big_whale",
        "woo_view_content",
        "woo_view_content_for_category",
        "woo_view_category",
        "woo_view_item_list",
        "woo_view_item_list_single",
        "woo_view_item_list_search",
        "woo_view_item_list_shop",
        "woo_view_item_list_tag",
        "woo_add_to_cart_on_cart_page",
        "woo_add_to_cart_on_cart_page_category",
        "woo_add_to_cart_on_checkout_page",
        "woo_add_to_cart_on_checkout_page_category",
        "woo_initiate_checkout",
        "woo_initiate_checkout_category",
        "woo_purchase",
        "woo_initiate_set_checkout_option",
        "woo_initiate_checkout_progress_f",
        "woo_initiate_checkout_progress_l",
        "woo_initiate_checkout_progress_e",
        "woo_initiate_checkout_progress_o",
        "woo_remove_from_cart",
        "woo_add_to_cart_on_button_click",
        "woo_affiliate",
        "woo_paypal",
        "woo_select_content_category",
        "woo_select_content_single",
        "woo_select_content_search",
        "woo_select_content_shop",
        "woo_select_content_tag",
        "woo_complete_registration"
    );
    public $doingAMP = false;


    private static $_instance;

    public static function instance() {

        if ( is_null( self::$_instance ) ) {
            self::$_instance = new self();
        }

        return self::$_instance;

    }

    private function __construct() {

    }

    static function getSlug() {
        return "woo";
    }

    function getCount()
    {
        $size = 0;
        if(!$this->isEnabled()) {
            return 0;
        }
        foreach ($this->events as $event) {
            if($this->isActive($event)){
                $size++;
            }
        }
       return $size;
    }

    function isEnabled()
    {
        return isWooCommerceActive() && PYS()->getOption( 'woo_enabled' );
    }

    function getOptions() {

        if($this->isEnabled()) {
            global $post;
            $data = array(
                'enabled'                       => true,
                'addToCartOnButtonEnabled'      => PYS()->getOption( 'woo_add_to_cart_enabled' ) && PYS()->getOption( 'woo_add_to_cart_on_button_click' ),
                'addToCartOnButtonValueEnabled' => PYS()->getOption( 'woo_add_to_cart_value_enabled' ),
                'addToCartOnButtonValueOption'  => PYS()->getOption( 'woo_add_to_cart_value_option' ),
                'woo_purchase_on_transaction'   => PYS()->getOption( 'woo_purchase_on_transaction' ) ,
                'singleProductId'               => isWooCommerceActive() && is_singular( 'product' ) ? $post->ID : null,
                'affiliateEnabled'              => PYS()->getOption( 'woo_affiliate_enabled' ),
                'removeFromCartSelector'        => isWooCommerceVersionGte( '3.0.0' )
                    ? 'form.woocommerce-cart-form .remove'
                    : '.cart .product-remove .remove',
                'addToCartCatchMethod'  => PYS()->getOption('woo_add_to_cart_catch_method')
            );
            $woo_affiliate_custom_event_type = PYS()->getOption( 'woo_affiliate_custom_event_type' );
            if ( PYS()->getOption( 'woo_affiliate_event_type' ) == 'custom' && ! empty( $woo_affiliate_custom_event_type ) ) {
                $data['affiliateEventName'] = sanitizeKey( PYS()->getOption( 'woo_affiliate_custom_event_type' ) );
            } else {
                $data['affiliateEventName'] = PYS()->getOption( 'woo_affiliate_event_type' );
            }
            return $data;
        } else {
            return array(
                'enabled' => false,
            );
        }

    }

    function isReadyForFire($event)
    {
        switch ($event) {
            case 'woo_affiliate': {
                return PYS()->getOption( 'woo_affiliate_enabled' );
            }
            case 'woo_add_to_cart_on_button_click': {

                return PYS()->getOption( 'woo_add_to_cart_enabled' )
                    && PYS()->getOption( 'woo_add_to_cart_on_button_click' )
                    && PYS()->getOption('woo_add_to_cart_catch_method') == "add_cart_js"; // or use in hook
            }
            case 'woo_select_content_category': {
                return PYS()->getOption( 'woo_view_item_list_enabled' ) && !$this->doingAMP && is_tax( 'product_cat' );
            }
            case 'woo_select_content_single': {
                return PYS()->getOption( 'woo_view_item_list_enabled' ) && !$this->doingAMP && is_product();
            }
            case 'woo_select_content_search': {
                return PYS()->getOption( 'woo_view_item_list_enabled' ) && !$this->doingAMP && is_search();
            }
            case 'woo_select_content_shop': {
                return PYS()->getOption( 'woo_view_item_list_enabled' ) && !$this->doingAMP && is_shop()&& !is_search();
            }
            case 'woo_select_content_tag': {
                return PYS()->getOption( 'woo_view_item_list_enabled' ) && !$this->doingAMP && is_product_tag();
            }
            case 'woo_paypal': {
                return PYS()->getOption( 'woo_paypal_enabled' ) && is_checkout() && ! is_wc_endpoint_url();
            }
            case 'woo_remove_from_cart': {
                return PYS()->getOption( 'woo_remove_from_cart_enabled') && is_cart();
            }
            case "woo_initiate_checkout_progress_f":
            case "woo_initiate_checkout_progress_l":
            case "woo_initiate_checkout_progress_e":
            case "woo_initiate_checkout_progress_o": {
                return PYS()->getOption( "woo_checkout_steps_enabled" ) && is_checkout() ;
            }
            case 'woo_initiate_set_checkout_option': {
                return PYS()->getOption( "woo_checkout_steps_enabled" )  && is_checkout() && ! is_wc_endpoint_url();
            }
            case 'woo_complete_registration': {
                return
                    PYS()->getOption( 'woo_complete_registration_enabled' )
                    && is_order_received_page()
                    && wooIsRequestContainOrderId();
            }
            case 'woo_purchase' : {
                $status = PYS()->getOption( 'woo_purchase_enabled' )
                    && (is_order_received_page() || (EventsWcf()->isEnabled() && PYS()->getOption('wcf_purchase_on') == 'all' && (isWcfUpSale() || isWcfDownSale())))
                    && wooIsRequestContainOrderId();
                return $status;
            }
            case 'woo_frequent_shopper': {
                if(is_order_received_page() && PYS()->getOption( 'woo_frequent_shopper_enabled' ) &&
                    wooIsRequestContainOrderId()) {
                    $customerTotals = $this->getWooCustomerTotals();
                    $orders_count = (int) PYS()->getOption( 'woo_frequent_shopper_transactions' );
                    return  $customerTotals['orders_count'] >= $orders_count;
                }
                return false;
            }
            case 'woo_vip_client': {
                if(is_order_received_page() && PYS()->getOption( 'woo_vip_client_enabled' )&&
                    wooIsRequestContainOrderId()) {
                    $customerTotals = $this->getWooCustomerTotals();
                    $orders_count = (int) PYS()->getOption( 'woo_vip_client_transactions' );
                    $avg = (int) PYS()->getOption( 'woo_vip_client_average_value' );
                    return $customerTotals['orders_count'] >= $orders_count &&
                        $customerTotals['avg_order_value'] >= $avg;
                }
                return false;
            }
            case 'woo_big_whale': {
                if(is_order_received_page() && PYS()->getOption( 'woo_big_whale_enabled' )&&
                    wooIsRequestContainOrderId()) {
                    $customerTotals = $this->getWooCustomerTotals();
                    $ltv = (int) PYS()->getOption( 'woo_big_whale_ltv' );
                    return $customerTotals['ltv'] >= $ltv;
                }
                return false;
            }

            case 'woo_view_content' : {
                return PYS()->getOption( 'woo_view_content_enabled' )
                    && is_product();
            }
            case 'woo_view_content_for_category':
                return PYS()->getOption( 'woo_view_content_enabled' ) &&  is_product();

            case 'woo_view_category': {
                return PYS()->getOption( 'woo_view_category_enabled' ) &&  is_tax( 'product_cat' );
            }
            case 'woo_view_item_list': {
                return PYS()->getOption( 'woo_view_item_list_enabled' ) &&  is_tax( 'product_cat' );
            }
            case 'woo_view_item_list_single': {
                return PYS()->getOption( 'woo_view_item_list_enabled' ) &&  is_product();
            }
            case 'woo_view_item_list_search': {
                return PYS()->getOption( 'woo_view_item_list_enabled' ) &&  is_search();
            }
            case 'woo_view_item_list_shop': {
                return PYS()->getOption( 'woo_view_item_list_enabled' ) &&  is_shop() && !is_search();
            }
            case 'woo_view_item_list_tag': {
                return PYS()->getOption( 'woo_view_item_list_enabled' ) &&  is_product_tag();
            }
            case 'woo_add_to_cart_on_cart_page_category': {
                return PYS()->getOption( 'woo_add_to_cart_enabled' ) &&
                    PYS()->getOption( 'woo_add_to_cart_on_cart_page' ) &&
                    is_cart() &&
                    Facebook()->enabled() &&
                    count(Facebook()->getCategoryPixelIDs()) > 0
                    && count(WC()->cart->get_cart())>0;
            }
            case 'woo_add_to_cart_on_cart_page': {
                return PYS()->getOption( 'woo_add_to_cart_enabled' ) &&
                    PYS()->getOption( 'woo_add_to_cart_on_cart_page' ) &&
                    is_cart()
                    && count(WC()->cart->get_cart())>0;
            }
            case 'woo_add_to_cart_on_checkout_page': {
                return PYS()->getOption( 'woo_add_to_cart_enabled' ) && PYS()->getOption( 'woo_add_to_cart_on_checkout_page' )
                    && is_checkout() && ! is_wc_endpoint_url()
                    && count(WC()->cart->get_cart())>0;
            }
            case 'woo_add_to_cart_on_checkout_page_category': {
                return PYS()->getOption( 'woo_add_to_cart_enabled' ) && PYS()->getOption( 'woo_add_to_cart_on_checkout_page' )
                    && is_checkout() && ! is_wc_endpoint_url() &&
                    Facebook()->enabled() &&
                    count(Facebook()->getCategoryPixelIDs()) > 0
                    && count(WC()->cart->get_cart())>0;
            }
            case 'woo_initiate_checkout': {
                return PYS()->getOption( 'woo_initiate_checkout_enabled' ) && is_checkout() && ! is_wc_endpoint_url();
            }
            case 'woo_initiate_checkout_category': {
                return PYS()->getOption( 'woo_initiate_checkout_enabled' ) && is_checkout() &&
                    !is_wc_endpoint_url() &&
                    Facebook()->enabled() &&
                    count(Facebook()->getCategoryPixelIDs()) > 0;
            }
        }
        return false;
    }

    function getEvent($eventId)
    {
        switch ($eventId) {
            case 'woo_remove_from_cart':
            case 'woo_select_content_search':
            case 'woo_select_content_shop':
            case 'woo_select_content_tag':
            case 'woo_select_content_single':
            case 'woo_select_content_category': {
                $event = new GroupedEvent($eventId,EventTypes::$DYNAMIC);
                return $event;
            }
            case 'woo_initiate_set_checkout_option':
            case 'woo_initiate_checkout':
            case 'woo_add_to_cart_on_checkout_page':
            case 'woo_add_to_cart_on_cart_page':
            case 'woo_view_item_list_tag':
            case 'woo_view_item_list_shop':
            case 'woo_view_item_list_search':
            case 'woo_view_item_list_single':
            case 'woo_view_category':
            case 'woo_view_item_list':
            case 'woo_view_content_for_category':
            case 'woo_big_whale':
            case 'woo_vip_client':
            case 'woo_frequent_shopper':
                return new SingleEvent($eventId,EventTypes::$STATIC);
            case 'woo_view_content': {
                $events = [];
                if( is_product() ) {
                    global $post;
                    $event = new SingleEvent($eventId,EventTypes::$STATIC);
                    $event->args = [
                        "id" => $post->ID,
                        'quantity'  => 1
                    ];
                    $events[] = $event;
                }

                return $events;
            }
            case 'woo_paypal':
            case 'woo_affiliate':
                return new SingleEvent($eventId,EventTypes::$DYNAMIC);
            case 'woo_add_to_cart_on_button_click':{
                $events = [];
                if(isNextWcfCheckoutPage()) {
                    $wcfProducts = getWcfFlowCheckoutProducts();
                    foreach($wcfProducts as $product) {
                        $event =  new SingleEvent($eventId,EventTypes::$DYNAMIC);
                        $event->args = [
                            "productId" => $product['product'],
                            'quantity'  => $product['quantity'],
                            'discount_value' => $product['discount_value'],
                            'discount_type' => $product['discount_type']
                        ];
                        $events[] = $event;
                    }
                } else {
                    $events[] =  new SingleEvent($eventId,EventTypes::$DYNAMIC);
                }

                return $events;

            }
            case 'woo_initiate_checkout_category':
            case 'woo_add_to_cart_on_checkout_page_category':
            case 'woo_add_to_cart_on_cart_page_category': {
                $categoryEvent = new GroupedEvent($eventId,EventTypes::$STATIC);
                $activeCatIds = Facebook()->getCategoryPixelIDs();
                $catIds = $this->getWooCartActiveCategories($activeCatIds);
                foreach ($catIds as $key){
                    $categoryEvent->addEvent(new SingleEvent($key,EventTypes::$STATIC));
                }
                return $categoryEvent;
            }
            case 'woo_complete_registration': {
                $event = new SingleEvent($eventId,EventTypes::$STATIC);
                return $event;
            }
            case 'woo_purchase' : {

                $order_id = $this->getPurchaseOrderId();
                if(!$order_id) return [];

                $events = array();
                $event = $this->create_purchase_event($eventId,$order_id);
                if($event != null) {
                    $events[] = $event;
                }

                // add purchase for category pixels
                if(Facebook()->enabled()) {
                    $activeCatIds = Facebook()->getCategoryPixelIDs();
                    if(count($activeCatIds) > 0) {

                        $catIds = $this->getWooOrderActiveCategories($order_id,$activeCatIds);
                        foreach ($catIds as $key){
                            $single = $this->create_purchase_event("woo_purchase_category",$order_id,$key);
                            if($single != null)
                                $events[] = $single;
                        }
                    }
                }
                return $events;
            }
            case "woo_initiate_checkout_progress_f":
            case "woo_initiate_checkout_progress_l":
            case "woo_initiate_checkout_progress_e":
            case "woo_initiate_checkout_progress_o":{
                $single =  new SingleEvent($eventId,EventTypes::$DYNAMIC);
                return $single;
            }
        }

        return null;
    }

    private function isActive($event)
    {
        switch ($event) {
            case 'woo_affiliate': {
                return PYS()->getOption( 'woo_affiliate_enabled' );
            }
            case 'woo_add_to_cart_on_button_click': {
                return PYS()->getOption( 'woo_add_to_cart_enabled' ) && PYS()->getOption( 'woo_add_to_cart_on_button_click' );
            }
            case 'woo_paypal': {
                return PYS()->getOption( 'woo_paypal_enabled' ) ;
            }
            case 'woo_remove_from_cart': {
                return PYS()->getOption( 'woo_remove_from_cart_enabled') ;
            }
           /* case "woo_initiate_checkout_progress_f":
            case "woo_initiate_checkout_progress_l":
            case "woo_initiate_checkout_progress_e":
            case "woo_initiate_checkout_progress_o": {
                return PYS()->getOption( "woo_checkout_steps_enabled" ) ;
            }*/
            case 'woo_initiate_set_checkout_option': {
                return PYS()->getOption( "woo_checkout_steps_enabled" );
            }
            case 'woo_purchase' : {
                return PYS()->getOption( 'woo_purchase_enabled' );
            }
            case 'woo_frequent_shopper': {
                return PYS()->getOption( 'woo_frequent_shopper_enabled' );
            }
            case 'woo_vip_client': {
                return PYS()->getOption( 'woo_vip_client_enabled' );
            }
            case 'woo_big_whale': {
                return PYS()->getOption( 'woo_big_whale_enabled' );
            }

            case 'woo_view_content' : {
                return PYS()->getOption( 'woo_view_content_enabled' ) ;
            }
            case 'woo_view_category': {
                return PYS()->getOption( 'woo_view_category_enabled' ) ;
            }

            case 'woo_select_content_category':
            case 'woo_view_item_list': {
                return PYS()->getOption( 'woo_view_item_list_enabled' ) ;
            }

            case 'woo_initiate_checkout': {
                return PYS()->getOption( 'woo_initiate_checkout_enabled' );
            }

        }
        return false;
    }
    private function getWooCartActiveCategories($activeIds) {
        $fireForCategory = array();
        foreach (WC()->cart->cart_contents as $cart_item_key => $cart_item) {
            $_product =  wc_get_product( $cart_item['product_id'] );
            if(!$_product) continue;
            $productCat = $_product->get_category_ids();
            foreach ($activeIds as $key => $value) {
                if(in_array($key,$productCat)) {
                    $fireForCategory[] = $key;
                }
            }
        }
        return array_unique($fireForCategory);
    }

    private function getWooOrderActiveCategories($orderId,$activeIds) {
        $order = new \WC_Order( $orderId );

        $fireForCategory = array();
        foreach ($order->get_items() as $item) {
            $_product =  wc_get_product( $item->get_product_id() );
            if(!$_product) continue;
            $productCat = $_product->get_category_ids();
            foreach ($activeIds as $key => $value) {
                if(in_array($key,$productCat)) { // fire initiate_checkout for all category pixel
                    $fireForCategory[] = $key;
                }
            }
        }
        return array_unique($fireForCategory);
    }

    function getWooCustomerTotals(){
        return PYS()->getEventsManager()->getWooCustomerTotals();
    }

    function getEvents() {
       return $this->events;
    }


    private function getPurchaseOrderId() {
        $order_id = wooGetOrderIdFromRequest();

        $order = wc_get_order($order_id);
        if(!$order) return false;

        if(EventsWcf()->isEnabled()) {
            $offer_orders_meta = $order->get_meta( '_cartflows_offer_child_orders' );

            $child_count = is_array($offer_orders_meta) ? count($offer_orders_meta) : 0;

            if(is_array($offer_orders_meta) && $child_count > 0) { // send info about last child order
                $keys = array_keys($offer_orders_meta);
                $child_id = $keys[count($keys)-1];
                $order_id = $child_id; // replace parent order to child
            }
        }

        $order = wc_get_order($order_id);
        if(!$order) return false;
        $status = "wc-".$order->get_status("edit");

        $disabledStatuses = (array)PYS()->getOption("woo_order_purchase_disabled_status");

        if( in_array($status,$disabledStatuses)) {
            return false;
        }

        if(EventsWcf()->isEnabled()
            && !PYS()->getOption('wcf_purchase_on_optin_enabled')
            && $order->get_meta('pys_order_type',true) == "wcf-optin") {
            return false;
        }


        if (PYS()->getOption( 'woo_purchase_on_transaction' ) &&
            get_post_meta( $order_id, '_pys_purchase_event_fired', true ) ) {
            return false;  // skip woo_purchase if this transaction was fired
        }
        update_post_meta( $order_id, '_pys_purchase_event_fired', true );

        return $order_id;
    }

    private function create_purchase_event($eventId,$order_id,$category_id = null) {
        $event = new SingleEvent($eventId,EventTypes::$STATIC);
        $wcf_offer_step_id = 0;
        $offer_shipping_fee = 0;
        $order = wc_get_order($order_id);
        $wcf_checkout_products = [];

        if(!$order) return null;


        if(isWcfStep()) {

            //prevent duplicate
           if(get_post_meta($order->get_id(),"pys_wcf_purchase_".count($order->get_items()),true)) {
                return null;
            } else {
                update_post_meta($order->get_id(),"pys_wcf_purchase_".count($order->get_items()),true);
            }

            // try to find products only for upsell or downsell
            $prev = getPrevWcfStep();


            if(PYS()->getOption('wcf_purchase_on') == 'all' && ($prev['type'] == 'upsell' || $prev['type'] == 'downsell')) {
                $wcf_offer_step_id = $order->get_meta('pys_wcf_last_offer_step',true);
            }
            if($prev['type'] == 'checkout'){
                $wcf_checkout_products = getWcfFlowCheckoutProducts();
            }

            if($wcf_offer_step_id) {

                // remove from order all products except offer
                if(!isWcfSeparateOrders()) {
                    $order_items = [];
                    $product = get_post_meta( $wcf_offer_step_id, 'wcf-offer-product', true );

                    if(!empty($product)) {
                        foreach ( $order->get_items() as $line_item ) {
                            $product_id = empty($line_item['variation_id']) ? $line_item['product_id'] : $line_item['variation_id'];
                            if($product_id == $product[0]) {
                                $order_items[] = $line_item;
                            }
                        }
                    }
                }
                // Need combine child orders if in settings fire a single Purchase event

            }

        }

        // if no offers products  load all products from order
        if(empty($order_items)) {
            $order_items = $order->get_items();
        }

        $products_data = [];
        $order_total = 0;
        $order_tax = 0;
        $shipping_cost = 0;
        //prepare order products
        foreach ($order_items as $line_item) {
            $product_id = empty($line_item['variation_id']) ? $line_item['product_id'] : $line_item['variation_id'];
            $product = wc_get_product($product_id);
            $sale_price = -1;

            //filter products for category
            if($category_id){
                $p = $product;
                if($product->get_type() == 'variation') {
                    $p = wc_get_product($line_item['product_id']);
                }
                if($p && !in_array($category_id,$p->get_category_ids())) continue;
            }

            if ( $product->get_type() == 'variation' ) {
                $parent_id = $product->get_parent_id(); // get terms from parent
                $tags = getObjectTerms( 'product_tag', $parent_id );
                $categories = getObjectTermsWithId( 'product_cat', $parent_id );
                $variation_name = implode("/", $product->get_variation_attributes());
            } else {
                $tags = getObjectTerms( 'product_tag', $product->get_id() );
                $categories = getObjectTermsWithId( 'product_cat', $product->get_id() );
                $variation_name = "";
            }

            if($wcf_offer_step_id && !isWcfSeparateOrders()) {
                $order_total += $line_item['total'] + $line_item['taxes']['total'][1];
                $order_tax += $line_item['total_tax'];

            }



            if($wcf_offer_step_id) {
                $sale_price = getWfcProductSalePrice($product,getWcfOfferProduct($wcf_offer_step_id)); // find sale prise for offer product
            } elseif (!empty($wcf_checkout_products)) {
                foreach ($wcf_checkout_products as $product_data) { // find sale prise for offer checkout products
                    if($product_id == $product_data['product']) {
                        $sale_price = getWfcProductSalePrice($product,$product_data);
                    }
                }
            }


            $price = getWooProductPriceToDisplay($product_id, $line_item['qty'],$sale_price);



            $product_data = [
                'product_id'    => $product->get_id(),
                'parent_id'     => $product->get_parent_id(),
                'type'          => $product->get_type(),
                'tags'          => $tags,
                'categories'    => $categories,
                'quantity'      => $line_item['qty'],
                'price'         => $price,
                'total'         => $line_item['total'],
                'total_tax'     => $line_item['total_tax'],
                'name'          => $product->get_name(),
                'variation_name'=> $variation_name
            ];

            $products_data[] = $product_data;
        }

        if(empty($products_data)) return null;

        // add sipping to total value for offer wcf product

        if($wcf_offer_step_id) {
            if(!isWcfSeparateOrders()) {
                $shipping_cost = ((float)$order->get_shipping_total( 'edit' )) + ((float) $order->get_shipping_tax( 'edit' ));
            } else {
                $shipping_cost = wcf_get_offer_shipping($wcf_offer_step_id);
            }
            $order_total += $shipping_cost;
        } else {
            $order_total = (float) $order->get_total( 'edit' );
            $order_tax = (float) $order->get_total_tax( 'edit' );
            $shipping_cost = ((float)$order->get_shipping_total( 'edit' )) + ((float) $order->get_shipping_tax( 'edit' ));
        }

        // calculate order value
        $value_option   = PYS()->getOption( 'woo_purchase_value_option' );
        $global_value   = PYS()->getOption( 'woo_purchase_value_global', 0 );
        $percents_value = PYS()->getOption( 'woo_purchase_value_percent', 100 );
        if($wcf_offer_step_id && !isWcfSeparateOrders()) {
            $value = getWcfEventValueOrder( $value_option, $wcf_offer_step_id, $global_value, $percents_value ,$products_data[0]['quantity']);
        } else {
            $value = getWooEventValueOrder( $value_option, $order, $global_value, $percents_value );
        }


        $customer_params = PYS()->getEventsManager()->getWooCustomerTotals($order_id);
        $args = [
            'order_id'      => $order_id,
            'currency'      => $order->get_currency(),
            'total'         => $order_total,
            'tax'           => $order_tax,
            'shipping_cost' => $shipping_cost,
            'predicted_ltv' => $customer_params['ltv'],
            'average_order' => $customer_params['avg_order_value'],
            'transactions_count' => $customer_params['orders_count'],
            'value'         => $value,
            'products'      => $products_data,
            'coupon_used'   => 'no',
            'coupon_name'   => '',
            'shipping'      => '',
            'town'          => $order->get_billing_city(),
            'state'         => $order->get_billing_state(),
            'country'       => $order->get_billing_country(),
            'payment_method'=> $order->get_payment_method_title(),
        ];

        // coupons
        if ( $coupons = $order->get_items( 'coupon' ) ) {
            $labels = array();
            foreach ( $coupons as $coupon ) {
                $labels[] = $coupon['name'] ? $coupon['name'] : null;
            }
            $args['coupon_used'] = 'yes';
            $args['coupon_name'] = implode( ', ', $labels );

        }

        // shipping method
        if ( $shipping_methods = $order->get_items( 'shipping' ) ) {

            $labels = array();
            foreach ( $shipping_methods as $shipping ) {
                $labels[] = $shipping['name'] ? $shipping['name'] : null;
            }
            $args['shipping'] = implode( ', ', $labels );
        }


        $event->args = $args;

        $event->addPayload(['woo_order' => $order_id]);
       return $event;
    }
}

/**
 * @return EventsWoo
 */
function EventsWoo() {
    return EventsWoo::instance();
}

EventsWoo();
