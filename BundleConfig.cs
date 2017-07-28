using System.Web.Optimization;

namespace DigiOne.ServiceSphere.Website.Themes.ServiceSphere
{
    public static class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            var masterScriptBundle = new ScriptBundle("~/bundles/ServiceSphere/script/master.js");

            // Vendor scripts
            masterScriptBundle.Include("~/Themes/ServiceSphere/UI/vendor/modernizr/modernizr.js");
            masterScriptBundle.Include("~/Themes/ServiceSphere/UI/vendor/jquery/dist/jquery.min.js");
            masterScriptBundle.Include("~/Themes/ServiceSphere/UI/vendor/material-design-lite/material.min.js");
            masterScriptBundle.Include("~/Themes/ServiceSphere/UI/vendor/mdl-selectfield/mdl-selectfield.min.js");
            masterScriptBundle.Include("~/Themes/ServiceSphere/UI/vendor/mdl-components-ext/src/file/file.js");
            masterScriptBundle.Include("~/Themes/ServiceSphere/UI/vendor/jQuery.dotdotdot/src/js/jquery.dotdotdot.min.js");
            masterScriptBundle.Include("~/Themes/ServiceSphere/UI/vendor/momentjs/min/moment.min.js");
            masterScriptBundle.Include("~/Themes/ServiceSphere/UI/vendor/select2/dist/js/select2.full.min.js");
            masterScriptBundle.Include("~/Themes/ServiceSphere/UI/vendor/jquery-placeholder/jquery.placeholder.min.js");
            masterScriptBundle.Include("~/Themes/ServiceSphere/UI/vendor/global/globalfunctions.js");
   
			// Custom scripts
            masterScriptBundle.Include("~/Themes/ServiceSphere/UI/js/pikaday.js");
            masterScriptBundle.Include("~/Themes/ServiceSphere/UI/js/script.js");
            
            bundles.Add(masterScriptBundle);
        }
    }
}