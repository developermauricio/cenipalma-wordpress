<?php

/**
 * Copyright (c) 2015-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to
 * use, copy, modify, and distribute this software in source code or binary
 * form for use in connection with the web services and APIs provided by
 * Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use
 * of this software is subject to the Facebook Developer Principles and
 * Policies [http://developers.facebook.com/policy/]. This copyright notice
 * shall be included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */
namespace PYS_PRO_GLOBAL\FacebookAds\Object;

use PYS_PRO_GLOBAL\FacebookAds\ApiRequest;
use PYS_PRO_GLOBAL\FacebookAds\Cursor;
use PYS_PRO_GLOBAL\FacebookAds\Http\RequestInterface;
use PYS_PRO_GLOBAL\FacebookAds\TypeChecker;
use PYS_PRO_GLOBAL\FacebookAds\Object\Fields\AdPlacePageSetFields;
use PYS_PRO_GLOBAL\FacebookAds\Object\Values\AdPlacePageSetCategoryValues;
use PYS_PRO_GLOBAL\FacebookAds\Object\Values\AdPlacePageSetLocationTypesValues;
use PYS_PRO_GLOBAL\FacebookAds\Object\Values\AdPlacePageSetTargetedAreaTypeValues;
/**
 * This class is auto-generated.
 *
 * For any issues or feature requests related to this class, please let us know
 * on github and we'll fix in our codegen framework. We'll not be able to accept
 * pull request for this class.
 *
 */
class AdPlacePageSet extends \PYS_PRO_GLOBAL\FacebookAds\Object\AbstractCrudObject
{
    /**
     * @deprecated getEndpoint function is deprecated
     */
    protected function getEndpoint()
    {
        return 'ad_place_page_sets';
    }
    /**
     * @return AdPlacePageSetFields
     */
    public static function getFieldsEnum()
    {
        return \PYS_PRO_GLOBAL\FacebookAds\Object\Fields\AdPlacePageSetFields::getInstance();
    }
    protected static function getReferencedEnums()
    {
        $ref_enums = array();
        $ref_enums['Category'] = \PYS_PRO_GLOBAL\FacebookAds\Object\Values\AdPlacePageSetCategoryValues::getInstance()->getValues();
        $ref_enums['LocationTypes'] = \PYS_PRO_GLOBAL\FacebookAds\Object\Values\AdPlacePageSetLocationTypesValues::getInstance()->getValues();
        $ref_enums['TargetedAreaType'] = \PYS_PRO_GLOBAL\FacebookAds\Object\Values\AdPlacePageSetTargetedAreaTypeValues::getInstance()->getValues();
        return $ref_enums;
    }
    public function getSelf(array $fields = array(), array $params = array(), $pending = \false)
    {
        $this->assureId();
        $param_types = array();
        $enums = array();
        $request = new \PYS_PRO_GLOBAL\FacebookAds\ApiRequest($this->api, $this->data['id'], \PYS_PRO_GLOBAL\FacebookAds\Http\RequestInterface::METHOD_GET, '/', new \PYS_PRO_GLOBAL\FacebookAds\Object\AdPlacePageSet(), 'NODE', \PYS_PRO_GLOBAL\FacebookAds\Object\AdPlacePageSet::getFieldsEnum()->getValues(), new \PYS_PRO_GLOBAL\FacebookAds\TypeChecker($param_types, $enums));
        $request->addParams($params);
        $request->addFields($fields);
        return $pending ? $request : $request->execute();
    }
}
