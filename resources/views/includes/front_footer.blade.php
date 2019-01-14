<!-- Footer -->
<footer>
    <div class="row">
        <div class="col-lg-12">
            <p>Copyright &copy; Robin Joshua {{Illuminate\Support\Carbon::now()->year}}</p>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- /.row -->
</footer>


</div>
<!-- /.container -->

<!-- scripts -->

{{--For searching post--}}
<script type="text/javascript">

    var postUri = "{{route('home.post','')}}";
    var algoliaAppId = "{{env('ALGOLIA_APP_ID')}}";
    var algoliaSearchKey = "{{env('ALGOLIA_SEARCH_SECRET')}}";

</script>

<script src="{{asset('js/libs.js')}}"></script>




</body>

</html>
