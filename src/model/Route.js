/**
 * IronFunctions
 * The open source serverless platform.
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
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
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.IronFunctions) {
      root.IronFunctions = {};
    }
    root.IronFunctions.Route = factory(root.IronFunctions.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Route model module.
   * @module model/Route
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Route</code>.
   * @alias module:model/Route
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Route</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Route} obj Optional instance to populate.
   * @return {module:model/Route} The populated <code>Route</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('app_name')) {
        obj['app_name'] = ApiClient.convertToType(data['app_name'], 'String');
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
      if (data.hasOwnProperty('headers')) {
        obj['headers'] = ApiClient.convertToType(data['headers'], 'String');
      }
      if (data.hasOwnProperty('memory')) {
        obj['memory'] = ApiClient.convertToType(data['memory'], 'Integer');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('config')) {
        obj['config'] = ApiClient.convertToType(data['config'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * App this route belongs to.
   * @member {String} app_name
   */
  exports.prototype['app_name'] = undefined;
  /**
   * URL path that will be matched to this route
   * @member {String} path
   */
  exports.prototype['path'] = undefined;
  /**
   * Name of Docker image to use in this route. You should include the image tag, which should be a version number, to be more accurate. Can be overridden on a per route basis with route.image.
   * @member {String} image
   */
  exports.prototype['image'] = undefined;
  /**
   * Map of http headers that will be sent with the response
   * @member {String} headers
   */
  exports.prototype['headers'] = undefined;
  /**
   * Max usable memory for this route (MiB).
   * @member {Integer} memory
   */
  exports.prototype['memory'] = undefined;
  /**
   * Route type
   * @member {module:model/Route.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Route configuration - overrides application configuration
   * @member {Object.<String, String>} config
   */
  exports.prototype['config'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "sync"
     * @const
     */
    "sync": "sync",
    /**
     * value: "async"
     * @const
     */
    "async": "async"  };


  return exports;
}));


